import Image from "next/image"
import heroImg from "@/images/hero.jpg"
export default function Hero() {
	return (
		<div className="relative isolate overflow-hidden pt-14">
			<Image
				alt="zencare, cuidar desde la presencia"
				src={heroImg}
				className="absolute inset-0 -z-10 size-full object-cover"
				priority
			/>

			{/* Overlay */}
			<div className="absolute inset-0 z-0 bg-white/50 dark:bg-black/20 pointer-events-none" />

			<div className="relative z-10 flex min-h-[80vh] items-start justify-center">
				<div className="max-w-2xl pt-24 sm:pt-12">
					{/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
							<div className="relative rounded-full px-3 py-1 text-sm/6 text-subtle ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-white/10 dark:hover:ring-white/20">
								Announcing our next round of funding.{" "}
								<a
									href="#"
									className="font-semibold text-primary"
								>
									<span aria-hidden="true" className="absolute inset-0" />
									Read more <span aria-hidden="true">&rarr;</span>
								</a>
							</div>
						</div> */}
					<div className="text-center">
						<h1 className="text-5xl font-main font-semibold tracking-tight text-balance text-title sm:text-7xl">
							Cuidar desde la Presencia
						</h1>
						<p className="mt-8 text-lg font-medium text-pretty text-subtle sm:text-xl/8">
							Transformando la cultura de los cuidados mediante la formación y
							práctica de la Atención Consciente.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="#"
								className="rounded-md bg-primary-dark px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
							>
								Descubre nuestras formaciones
							</a>
							{/* <a
								href="#"
								className="text-sm/6 font-semibold text-gray-900 dark:text-white"
							>
								Learn more <span aria-hidden="true">→</span>
							</a> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
