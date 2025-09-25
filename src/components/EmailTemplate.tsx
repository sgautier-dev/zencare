import React from "react"

interface EmailTemplateProps {
	name: string
	senderEmail: string
	phone: string
	message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	name,
	senderEmail,
	phone,
	message,
}) => (
	<div>
		<h1>Formulario de contacto ZenCare</h1>
		<p>
			<strong>Nombre :</strong> {name}
		</p>
		<p>
			<strong>Email :</strong> {senderEmail}
		</p>
		<p>
			<strong>Teléfono :</strong> {phone}
		</p>
		<p>
			<strong>Mensaje :</strong> {message}
		</p>
	</div>
)
