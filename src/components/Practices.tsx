import Image from "next/image"
import { HeartIcon, ShieldCheckIcon } from "@heroicons/react/24/outline" // ou lucide si tu préfères
import practiceImg from "@/images/zen.png"

type Feature = {
	name: string
	points: string[] // ← plusieurs phrases en liste
	icon: React.ComponentType<{ className?: string }>
	colorClass?: string // optionnel si tu veux colorer l’icône différemment
}

const features: Feature[] = [
	{
		name: "Para los pacientes.",
		points: [
			"Crear un entorno de calma y aceptación, reduciendo el miedo y la ansiedad.",
			"Conectar con su ser interior y encontrar paz en la transición.",
			"Aceptar el presente sin juicio, facilitando una despedida más consciente.",
		],
		icon: HeartIcon,
		colorClass: "text-secondary",
	},
	{
		name: "Para los cuidadores.",
		points: [
			"Estar plenamente presentes desde la serenidad y la escucha compasiva.",
			"Reducir el agotamiento emocional mediante prácticas breves y sostenibles.",
			"Fortalecer el vínculo y la calidad del acompañamiento.",
		],
		icon: ShieldCheckIcon,
		colorClass: "text-accent",
	},
]

export default function Practices() {
	return (
		<section className="overflow-hidden mt-32 sm:mt-56">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					{/* Texte */}
					<div className="lg:ml-auto lg:pt-4 lg:pl-4">
						<div className="lg:max-w-lg">
							<p className="text-sm font-semibold tracking-wide text-primary">
								Meditación y Mindfulness
							</p>
							<h2 className="mt-2 text-4xl sm:text-5xl font-main tracking-tight text-title">
								Herramientas para el Fin de la Vida
							</h2>
							<p className="mt-6 text-lg/8 text-subtle">
								La práctica de la meditación en la quietud silenciosa y el
								mindfulness son elementos centrales en ZenCare. Estas
								herramientas ayudan a pacientes y cuidadores a cultivar calma,
								aceptación y presencia plena ante la experiencia del final de la
								vida.
							</p>

							<dl className="mt-10 max-w-xl space-y-8 text-base/7 text-main lg:max-w-none">
								{features.map((feature) => (
									<div key={feature.name} className="relative pl-10">
										<dt className="font-semibold text-title">
											<feature.icon
												aria-hidden="true"
												className={`absolute top-1 left-0 size-6 ${
													feature.colorClass ?? "text-primary"
												}`}
											/>
											{feature.name}
										</dt>
										<dd className="mt-3">
											<ul className="list-disc pl-5 space-y-2 text-subtle">
												{feature.points.map((line, i) => (
													<li key={i}>{line}</li>
												))}
											</ul>
										</dd>
									</div>
								))}
							</dl>
						</div>
					</div>

					{/* Image */}
					<div className="flex items-start justify-end lg:order-first">
						<Image
							alt="zencare, cuidar desde la presencia"
							src={practiceImg}
							className="w-full max-w-xl rounded-2xl"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
