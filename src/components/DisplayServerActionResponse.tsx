// components/DisplayServerActionResponse.tsx
"use client"

import { useState, useEffect } from "react"
import Notification from "./Notification"

type ActionResult = {
	data?: { message?: string }
	serverError?: string
	fetchError?: string
	validationErrors?: Record<string, string[] | undefined> | undefined
}

type Props = {
	result: ActionResult
}

const fieldLabels: Record<string, string> = {
	name: "Nombre",
	email: "Email",
	phone: "Teléfono",
	message: "Mensaje",
}

export function DisplayServerActionResponse({ result }: Props) {
	const { data, serverError, fetchError, validationErrors } = result

	const [showSuccess, setShowSuccess] = useState(!!data?.message)
	const [showServerError, setShowServerError] = useState(!!serverError)
	const [showFetchError, setShowFetchError] = useState(!!fetchError)
	const [showValidationErrors, setShowValidationErrors] = useState(true)

	useEffect(() => {
		setShowSuccess(!!data?.message)
	}, [data])

	useEffect(() => {
		setShowServerError(!!serverError)
	}, [serverError])

	useEffect(() => {
		setShowFetchError(!!fetchError)
	}, [fetchError])

	useEffect(() => {
		setShowValidationErrors(
			!!validationErrors && Object.keys(validationErrors).length > 0
		)
	}, [validationErrors])

	return (
		<>
			{data?.message && (
				<Notification
					show={showSuccess}
					onClose={() => setShowSuccess(false)}
					title="¡Mensaje enviado!"
					message={data.message}
					variant="success"
				/>
			)}

			{serverError && (
				<Notification
					show={showServerError}
					onClose={() => setShowServerError(false)}
					title="Error del servidor"
					message="Ha ocurrido un problema. Inténtalo de nuevo más tarde."
					variant="error"
				/>
			)}

			{fetchError && (
				<Notification
					show={showFetchError}
					onClose={() => setShowFetchError(false)}
					title="Error de conexión"
					message="Revisa tu conexión a Internet e inténtalo de nuevo."
					variant="error"
				/>
			)}

			{validationErrors &&
				showValidationErrors &&
				Object.keys(validationErrors).map((key) => {
					const label = fieldLabels[key] ?? key
					const errors = validationErrors[key]
					if (!errors || errors.length === 0) return null
					return (
						<Notification
							key={key}
							show={true}
							onClose={() => setShowValidationErrors(false)}
							title="Error de validación"
							message={`${label}: ${errors.join(", ")}`}
							variant="error"
						/>
					)
				})}
		</>
	)
}
