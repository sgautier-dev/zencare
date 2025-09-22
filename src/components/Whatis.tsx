import Image from "next/image"
import whatisImg from "@/images/whatis-zencare.jpg"
export default function Whatis() {
	return (
		<div className="relative mt-32 sm:mt-56">
			<div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
				<div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6">
					<div className="mx-auto max-w-lg lg:mx-0">
						{/* <div className="hidden sm:mt-32 sm:flex lg:mt-16">
							<div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-400 dark:ring-white/10 dark:hover:ring-white/20">
								Anim aute id magna aliqua ad ad non deserunt sunt.{" "}
								<a
									href="#"
									className="font-semibold whitespace-nowrap text-indigo-600 dark:text-indigo-400"
								>
									<span aria-hidden="true" className="absolute inset-0" />
									Read more <span aria-hidden="true">&rarr;</span>
								</a>
							</div>
						</div> */}
						<h2 className="text-4xl font-main font-semibold tracking-tight text-pretty sm:text-5xl">
							¿Qué es ZenCare?
						</h2>
						<p className="mt-8 text-lg font-medium text-pretty sm:text-xl/8">
							ZenCare es un enfoque ético de cuidados a personas vulnerables
							(demencias, enfermedad mental, personas al final de la vida)
							basado en los principios no confesionales del Zen, que pone
							énfasis en la presencia plena, el silencio contemplativo y el
							acompañamiento compasivo.
						</p>
						<p className="mt-8 text-lg font-medium text-pretty sm:text-xl/8">
							En lugar de centrarnos en lo que se ocupa la medicina paliativa,
							ZenCare integra el bienestar psicoemocional y espiritual,
							aportando un entrenamiento destinado a crear una atmósfera de
							serenidad para el paciente y un soporte de práctica espiritual y
							acompañamiento compasivo para el cuidador (sea profesional,
							familiar o voluntario).
						</p>
						<p className="mt-8 text-lg font-medium text-pretty sm:text-xl/8">
							El Zen nos enseña a estar presentes en el aquí y ahora, a aceptar
							el momento tal y como es, y a ofrecer nuestro cuidado con
							compasión profunda y escucha atenta.
						</p>
						{/* <div className="mt-10 flex items-center gap-x-6">
							<a
								href="#"
								className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
							>
								Get started
							</a>
							<a
								href="#"
								className="text-sm/6 font-semibold text-gray-900 dark:text-white"
							>
								Learn more <span aria-hidden="true">→</span>
							</a>
						</div> */}
					</div>
				</div>
				<div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
					<Image
						alt="Qué es ZenCare"
						src={whatisImg}
						className="aspect-3/2 w-full object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
					/>
				</div>
			</div>
		</div>
	)
}
