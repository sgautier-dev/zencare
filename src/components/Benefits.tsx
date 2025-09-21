import { Heart, Flower, Handshake } from "lucide-react"

const features = [
	{
		name: "Alivio emocional y espiritual",
		description:
			"A través del cultivo sistemático de la atención consciente y del acompañamiento compasivo...",
		href: "#",
		icon: Heart,
		bgClass: "bg-secondary",
		iconClass: "text-white",
	},
	{
		name: "Alivio del sufrimiento físico",
		description:
			"Aunque no reemplaza los cuidados médicos tradicionales, el enfoque zen complementa el manejo del dolor...",
		href: "#",
		icon: Flower,
		bgClass: "bg-accent",
		iconClass: "text-white",
	},
	{
		name: "Conexión profunda con los seres queridos",
		description:
			"ZenCare fomenta un entorno donde los vínculos se fortalecen...",
		href: "#",
		icon: Handshake,
		bgClass: "bg-primary",
		iconClass: "text-white",
	},
]

export default function Benefits() {
	return (
		<div className="mt-32 sm:mt-56" id="benefits">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-4xl font-main font-semibold tracking-tight text-pretty sm:text-5xl">
						Beneficios del Enfoque Zen en el Cuidado de Fin de Vida
					</h2>
					<p className="mt-6 text-lg/8">
						El enfoque ZenCare ofrece múltiples beneficios, tanto para los
						pacientes como para los cuidadores.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.name} className="flex flex-col">
								<dt className="text-base/7 font-semibold">
									<div
										className={`mb-6 flex size-10 items-center justify-center rounded-lg ${feature.bgClass}`}
									>
										<feature.icon
											aria-hidden="true"
											className={`size-6 ${feature.iconClass}`}
										/>
									</div>
									{feature.name}
								</dt>
								<dd className="mt-1 flex flex-auto flex-col text-base/7 text-subtle">
									<p className="flex-auto">{feature.description}</p>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	)
}
