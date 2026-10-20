import Image from "next/image"
// Genuine photograph by panpan ma (@mymphoebe), Unsplash License.
// https://unsplash.com/photos/KTRd6tbdi68
const heroGardenPhoto =
	"https://images.unsplash.com/photo-1769506551162-f56c343f0642?auto=format&fit=crop&q=85&w=3000"
export default function Hero() {
	return (
		<div className="relative isolate overflow-hidden sm:pt-14">
			<Image
				alt="Dos personas sentadas en una terraza contemplan un jardín japonés."
				src={heroGardenPhoto}
				fill
				sizes="100vw"
				priority
				className="-z-10 object-cover object-[80%_62%] md:object-[center_60%]"
			/>

			{/* Light and dark overlays keep hero text legible over the same photograph. */}
			<div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-bg-site/85 via-bg-site/60 to-bg-site/25 dark:from-black/80 dark:via-black/55 dark:to-black/35" />

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
								className="rounded-md bg-primary px-3.5 py-2.5 text-sm sm:text-base font-semibold text-black shadow-xs hover:bg-primary-dark/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
