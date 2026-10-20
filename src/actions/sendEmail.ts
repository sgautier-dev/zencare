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
	name: z
		.string()
		.trim()
		.min(1, { message: "El nombre es obligatorio." })
		.max(120),
	email: z
		.email({ message: "Dirección de correo electrónico no válida." })
		.max(254),
	phone: z.string().max(50).optional(),
	message: z
		.string()
		.trim()
		.min(1, { message: "El mensaje es obligatorio." })
		.max(500),
	contact_info: z.string().optional(),
	consent: z
		.boolean()
		.refine(Boolean, "Debes aceptar el tratamiento de datos para enviar tu consulta."),
})

const sendEmail = actionClient
	.inputSchema(schema, {
		handleValidationErrorsShape: async (ve) =>
			flattenValidationErrors(ve).fieldErrors,
	})
	.action(
		async ({ parsedInput: { name, email, phone, message, contact_info } }) => {
			//throw new Error ('test')

			if (contact_info && contact_info.trim() !== "") {
				throw new Error("Bot detected (honeypot).")
			}

			await checkArcJetProtection()

			const delivery = await resend.emails.send({
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
			if (delivery.error || !delivery.data?.id) {
				throw new Error("Contact email provider did not accept the message")
			}

			return {
				message: "Su mensaje se ha enviado correctamente.",
			}
		}
	)

export default sendEmail
