// app/(sections)/Contact.tsx
"use client"

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"
import { useAction } from "next-safe-action/hooks"
import sendEmail from "@/actions/sendEmail"
import { Loader2 } from "lucide-react"
import { DisplayServerActionResponse } from "./DisplayServerActionResponse"
import Image from "next/image"
import contactImg from "@/images/contact.jpg"

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	})
	const formRef = useRef<HTMLFormElement>(null)
	const { execute, result, isExecuting } = useAction(sendEmail)

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		// honeypot field
		const fd = new FormData(formRef.current!)
		const contact_info = (fd.get("contact_info") as string) || ""

		execute({ ...formData, contact_info, consent: fd.get("consent") === "on" })
	}

	useEffect(() => {
		if (!isExecuting && result.data?.message) {
			if (formRef.current) {
				formRef.current.reset() // Reset form if success
			}
			setFormData({
				name: "",
				email: "",
				phone: "",
				message: "",
			})
		}
	}, [isExecuting, result])
	return (
		<section className="relative mt-32 scroll-mt-36 sm:mt-56 sm:scroll-mt-44" id="contact">
			{/* Side image (right on lg+) */}
			<div className="lg:absolute lg:inset-0 lg:left-1/2">
				<Image
					alt="zencare, contact"
					src={contactImg}
					className="h-64 w-full object-cover sm:h-80 lg:absolute lg:h-full"
					priority
				/>
			</div>

			<div className="pt-16 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
				<div className="px-6 lg:px-8">
					<div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
						<h2 className="text-4xl sm:text-5xl font-main tracking-tight text-title">
							Contacto
						</h2>
						<p className="mt-2 text-lg/8 text-subtle">
							¿Te interesa el grupo de meditación, el curso inicial o un retiro?
							Indica la actividad y modalidad que buscas. También puedes
							escribirnos para otras consultas. Enviar este formulario no
							confirma una plaza.
						</p>

						<form onSubmit={handleSubmit} ref={formRef} className="mt-12">
							<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
								{/* Nombre */}
								<div className="sm:col-span-1">
									<label
										htmlFor="name"
										className="block text-sm/6 font-semibold text-title"
									>
										Nombre
									</label>
									<div className="mt-2.5">
										<input
											id="name"
											name="name"
											type="text"
											autoComplete="name"
											maxLength={120}
											value={formData.name}
											onChange={handleChange}
											required
											className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-main outline-1 -outline-offset-1 outline-gray-300 placeholder:text-subtle focus:outline-2 focus:-outline-offset-2 focus:outline-primary-dark dark:bg-white/5 dark:text-title dark:outline-white/10 dark:placeholder:text-subtle"
											placeholder="Tu nombre"
										/>
									</div>
								</div>

								{/* Email */}
								<div className="sm:col-span-1">
									<label
										htmlFor="email"
										className="block text-sm/6 font-semibold text-title"
									>
										Email
									</label>
									<div className="mt-2.5">
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											maxLength={254}
											value={formData.email}
											onChange={handleChange}
											required
											className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-main outline-1 -outline-offset-1 outline-gray-300 placeholder:text-subtle focus:outline-2 focus:-outline-offset-2 focus:outline-primary-dark dark:bg-white/5 dark:text-title dark:outline-white/10 dark:placeholder:text-subtle"
											placeholder="tu@email.com"
										/>
									</div>
								</div>

								{/* Teléfono (opcional) */}
								<div className="sm:col-span-2">
									<div className="flex justify-between text-sm/6">
										<label
											htmlFor="phone"
											className="block font-semibold text-title"
										>
											Teléfono
										</label>
										<p id="phone-description" className="text-subtle">
											Opcional
										</p>
									</div>
									<div className="mt-2.5">
										<input
											id="phone"
											name="phone"
											type="tel"
											autoComplete="tel"
											maxLength={50}
											value={formData.phone}
											onChange={handleChange}
											aria-describedby="phone-description"
											className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-main outline-1 -outline-offset-1 outline-gray-300 placeholder:text-subtle focus:outline-2 focus:-outline-offset-2 focus:outline-primary-dark dark:bg-white/5 dark:text-title dark:outline-white/10 dark:placeholder:text-subtle"
											placeholder="+34 600 000 000"
										/>
									</div>
								</div>

								{/* Mensaje */}
								<div className="sm:col-span-2">
									<div className="flex justify-between text-sm/6">
										<label
											htmlFor="message"
											className="block font-semibold text-title"
										>
											Mensaje
										</label>
										<p id="message-description" className="text-subtle">
											Máx. 500 caracteres
										</p>
									</div>
									<div className="mt-2.5">
										<textarea
											id="message"
											name="message"
											rows={5}
											maxLength={500}
											aria-describedby="message-description"
											value={formData.message}
											onChange={handleChange}
											required
											className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-main outline-1 -outline-offset-1 outline-gray-300 placeholder:text-subtle focus:outline-2 focus:-outline-offset-2 focus:outline-primary-dark dark:bg-white/5 dark:text-title dark:outline-white/10 dark:placeholder:text-subtle"
											placeholder="Cuéntanos en qué te podemos ayudar"
										/>
									</div>
								</div>

								{/* Personal-data notice and explicit consent */}
								<div className="sm:col-span-2 space-y-3 text-sm/6 text-subtle">
									<p>
										Responsable: Fundación Vivir un Buen Morir. Los datos se
										utilizan para responder a tu consulta. Por favor, no
										incluyas información clínica ni datos de salud sensibles.
										Puedes consultar la{" "}
										<a
											href="https://vivirunbuenmorir.es/aviso-legal-y-politica-de-privacidad/"
											target="_blank"
											rel="noopener noreferrer"
											className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
										>
											información de privacidad de la Fundación
										</a>
										.
									</p>
									<label className="flex items-start gap-3">
										<input
											id="consent"
											name="consent"
											type="checkbox"
											required
											className="mt-1 size-4 shrink-0 accent-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
										/>
										<span>
											He leído la información de privacidad y acepto el tratamiento
											de mis datos para responder a esta consulta.
										</span>
									</label>
								</div>
							</div>

							{/* Honeypot anti-bot */}
							<input
								type="text"
								name="contact_info"
								className="hidden"
								tabIndex={-1}
								autoComplete="off"
							/>

							<div className="mt-10 flex justify-end border-t border-black/5 pt-8 dark:border-white/10">
								<button
									type="submit"
									className="rounded-md bg-primary px-3.5 py-2.5 text-sm sm:text-base font-semibold text-black shadow-xs hover:bg-primary-dark/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
								>
									{isExecuting ? (
										<Loader2 className="h-5 w-5 animate-spin" />
									) : (
										"Enviar mensaje"
									)}
								</button>
								<DisplayServerActionResponse result={result} />
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
