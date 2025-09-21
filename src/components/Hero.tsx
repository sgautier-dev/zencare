import Image from "next/image"
import heroImg from "@/images/hero.jpg"
import heroImgDark from "@/images/hero_dark.jpg"
export default function Hero() {
	return (
		<div className="relative isolate overflow-hidden sm:pt-14">
			<Image
				alt="zencare, cuidar desde la presencia"
				src={heroImg}
				className="absolute inset-0 -z-10 size-full object-cover block dark:hidden"
				priority
			/>

			{/* image for dark mode */}
			<Image
				alt="zencare, cuidar desde la presencia"
				src={heroImgDark}
				className="absolute inset-0 -z-10 size-full object-cover hidden dark:block"
				priority
			/>

			{/* Overlay */}
			<div className="absolute inset-0 z-0 bg-bg-site/50 dark:bg-black/40 pointer-events-none" />

			<div className="relative z-10 flex min-h-[80vh] items-start justify-center">
				<div className="max-w-3xl pt-12 sm:pt-12">
					{/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
							<div className="relative rounded-full px-3 py-1 text-base/6 text-subtle ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-white/10 dark:hover:ring-white/20">
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
							Cuidado Contemplativo en Final de Vida
						</h1>
						<p className="mt-8 text-lg font-medium text-pretty text-subtle sm:text-xl/8">
							Transformando la cultura de los cuidados mediante la formación y
							práctica de la Atención Consciente.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="#activities"
								className="rounded-md bg-primary-dark px-3.5 py-2.5 text-sm sm:text-base font-semibold text-white shadow-xs hover:bg-primary-dark/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
							>
								<span className="block sm:hidden">Nuestras formaciones</span>
								<span className="hidden sm:block">
									Descubre nuestras formaciones{" "}
								</span>
							</a>
							<a
								href="https://vivirunbuenmorir.es/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm sm:text-base/6 font-semibold text-gray-900 dark:text-white"
							>
								<span className="block sm:hidden">
									Un proyecto de la Fundación VBM{" "}
									<span className="text-secondary" aria-hidden="true">
										&#10095;
									</span>
								</span>

								<span className="hidden sm:block">
									Un proyecto de la Fundación Vivir un Buen Morir{" "}
									<span className="text-secondary" aria-hidden="true">
										&#10095;
									</span>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
