import Image from "next/image"
import practiceImg from "@/images/zen.png"

export default function Practices() {
	const recursos = [
		"Meditación en la quietud silenciosa",
		"Mindfulness",
		"Rituales de cuidado consciente",
		"Escucha compasiva",
		"Respiración y consciencia corporal",
		"Pausas de calma interior",
		"Artes creativas",
		"Música",
		"Terapias manuales",
	]

	return (
		<section className="overflow-hidden mt-32 sm:mt-56" id="practices">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					{/* Texte */}
					<div className="lg:ml-auto lg:pt-4 lg:pl-4">
						<div className="lg:max-w-lg">
							<p className="text-sm font-semibold tracking-wide text-primary">
								ZenCare
							</p>
							<h2 className="mt-2 text-4xl sm:text-5xl font-main tracking-tight text-title">
								Recursos principales
							</h2>
							<p className="mt-6 text-lg/8 text-subtle">
								Herramientas sencillas y prácticas que cultivamos en ZenCare
								para acompañar con serenidad, compasión y presencia plena.
							</p>

							<ul className="mt-10 max-w-xl space-y-3 text-base/7 text-main lg:max-w-none list-disc pl-6">
								{recursos.map((item, i) => (
									<li key={i} className="text-subtle">
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Image */}
					<div className="flex items-start justify-end lg:order-first">
						<Image
							alt="zencare, recursos principales"
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
