"use server"
import React from "react"
import { EmailTemplate } from "@/components/EmailTemplate"
import { Resend } from "resend"
import { z } from "zod"
import { actionClient } from "@/lib/safe-action"
import { flattenValidationErrors } from "next-safe-action"
import { checkArcJetProtection } from "@/lib/arcjet-protection"

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
	name: z.string().min(1, { message: "El nombre es obligatorio." }),
	email: z.email({ message: "Dirección de correo electrónico no válida." }),
	phone: z.string().optional(),
	message: z.string().min(1, { message: "El mensaje es obligatorio." }),
})

const sendEmail = actionClient
	.inputSchema(schema, {
		handleValidationErrorsShape: async (ve) =>
			flattenValidationErrors(ve).fieldErrors,
	})
	.action(async ({ parsedInput: { name, email, phone, message } }) => {
		//throw new Error ('test')

		await checkArcJetProtection()

		await resend.emails.send({
			from: "ZenCare Contacto <contacto@zencare.es>", // onboarding@resend.dev for resend temp address
			to: ["contacto@zencare.es"],
			replyTo: email as string,
			subject: `Mensaje de ${name}`,
			react: React.createElement(EmailTemplate, {
				name: name as string,
				senderEmail: email as string,
				phone: phone as string,
				message: message as string,
			}),
		})

		return {
			message: "Su mensaje se ha enviado correctamente.",
		}
	})

export default sendEmail
