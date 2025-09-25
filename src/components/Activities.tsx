// app/(sections)/Activities.tsx
import Image from "next/image"
import talleresImg from "@/images/talleres.jpeg"
import bienestarImg from "@/images/bienestar.jpg"
import zazenImg from "@/images/mar-zazen.jpg"
import retirosImg from "@/images/retiros.jpeg"
import onlineImg from "@/images/online.jpg"

export default function Activities() {
	return (
		<section className="mt-32 sm:mt-56" id="activities">
			<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
				{/* Heading */}
				<p className="text-sm font-semibold tracking-wide text-primary">
					Actividades ZenCare
				</p>
				<h2 className="mt-2 max-w-3xl text-4xl sm:text-5xl font-main tracking-tight text-title">
					Cultivar la atención consciente, la compasión y el cuidado
					contemplativo
				</h2>
				<p className="mt-4 max-w-3xl text-subtle">
					En ZenCare ofrecemos actividades y espacios de formación diseñados
					para cultivar la atención consciente, la compasión y el cuidado
					contemplativo, tanto para profesionales como para familiares y
					voluntarios.
				</p>

				{/* Bento grid */}
				<div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
					{/* 1. Talleres y formación continua */}
					<div className="relative lg:col-span-3">
						<div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-t-4xl lg:rounded-tl-4xl dark:bg-stone-900" />
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
							<Image
								alt="Talleres y formación continua"
								src={talleresImg}
								className="h-80 w-full object-cover object-left"
							/>
							<div className="p-10 pt-4">
								<h3 className="text-base/4 font-semibold text-accent">
									Talleres y formación continua
								</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-title">
									Programas formativos acreditados
								</p>
								<ul className="mt-2 max-w-xl list-disc pl-5 text-base/6 text-subtle space-y-1.5">
									<li>Programas presenciales y Online en directo.</li>
									<li>
										Formación específica para profesionales sanitarios en
										entidades asistenciales.
									</li>
									<li>Talleres formativos para jóvenes estudiantes.</li>
									<li>Talleres de lectura y de cine-coloquio.</li>
									<li>
										Talleres de escucha, counselling para el acompañamiento.
									</li>
								</ul>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl dark:outline-white/10" />
					</div>

					{/* 2. Meditación y prácticas regulares */}
					<div className="relative lg:col-span-3">
						<div className="absolute inset-0 rounded-lg bg-white lg:rounded-tr-4xl dark:bg-stone-900" />
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
							<Image
								alt="Meditación y prácticas regulares"
								src={zazenImg}
								className="h-80 w-full object-cover object-left lg:object-right"
							/>
							<div className="p-10 pt-4">
								<h3 className="text-base/4 font-semibold text-accent">
									Meditación y prácticas regulares
								</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-title">
									Espacio para la práctica y las enseñanzas de diversas
									tradiciones de sabiduría
								</p>
								<ul className="mt-2 max-w-xl list-disc pl-5 text-base/6 text-subtle space-y-1.5">
									<li>
										Sesiones semanales de meditación zen (martes, jueves,
										sábados).
									</li>
									<li>
										Sesiones de enseñanzas y coloquio, con diferentes enseñantes
										(un sábado al mes).
									</li>
									<li>Sesiones de mindfulness.</li>
								</ul>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-tr-4xl dark:outline-white/10" />
					</div>

					{/* 3. Terapias de bienestar */}
					<div className="relative lg:col-span-2">
						<div className="absolute inset-0 rounded-lg bg-white lg:rounded-bl-4xl dark:bg-stone-900" />
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
							<Image
								alt="Terapias de bienestar"
								src={bienestarImg}
								className="h-80 w-full object-cover object-left"
							/>
							<div className="p-10 pt-4">
								<h3 className="text-base/4 font-semibold text-accent">
									Terapias de bienestar
								</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-title">
									Autocuidado y reducción del estrés
								</p>
								<ul className="mt-2 max-w-xl list-disc pl-5 text-base/6 text-subtle space-y-1.5">
									<li>Taichi, chikung, yoga.</li>
									<li>Masajes y terapias manuales.</li>
									<li>Relajación y musicoterapia pasiva.</li>
								</ul>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-bl-4xl dark:outline-white/10" />
					</div>

					{/* 4. Retiros y convivencias */}
					<div className="relative lg:col-span-2">
						<div className="absolute inset-0 rounded-lg bg-white dark:bg-stone-900" />
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
							<Image
								alt="Retiros y convivencias"
								src={retirosImg}
								className="h-80 w-full object-cover"
							/>
							<div className="p-10 pt-4">
								<h3 className="text-base/4 font-semibold text-accent">
									Retiros y convivencias
								</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-title">
									Experiencias intensivas de prácticas contemplativas
								</p>
								<ul className="mt-2 max-w-xl list-disc pl-5 text-base/6 text-subtle space-y-1.5">
									<li>Retiros intensivos trimestrales.</li>
									<li>
										Convivencias de fin de semana para voluntariado y
										profesionales.
									</li>
								</ul>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 dark:outline-white/10" />
					</div>

					{/* 5. Recursos digitales */}
					<div className="relative lg:col-span-2">
						<div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-br-4xl dark:bg-stone-900" />
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
							<Image
								alt="Recursos digitales"
								src={onlineImg}
								className="h-80 w-full object-cover"
							/>
							<div className="p-10 pt-4">
								<h3 className="text-base/4 font-semibold text-accent">
									Recursos digitales
								</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-title">
									Contenidos para integrar ZenCare en el día a día
								</p>
								<ul className="mt-2 max-w-xl list-disc pl-5 text-base/6 text-subtle space-y-1.5">
									<li>Curso inicial online (5 semanas + material escrito).</li>
									<li>Guías prácticas, meditaciones guiadas, artículos.</li>
									<li>Acceso online a contenidos formativos.</li>
								</ul>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl dark:outline-white/10" />
					</div>
				</div>

				{/* CTA calendario */}
				{/* <div className="mt-10 sm:mt-16 flex justify-center">
					<a
						href="/docs/fechas-vbm-2026.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center rounded-md bg-primary-dark px-5 py-2.5 text-sm font-semibold text-white
                       hover:bg-primary-dark/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
					>
						Ver calendario completo 2026
						<span aria-hidden="true" className="ml-2">
							›
						</span>
					</a>
				</div> */}
				<div className="mt-10 sm:mt-16 flex justify-center">
					<div className="rounded-md bg-primary-light/20 px-6 py-4 text-center">
						<p className="text-lg font-semibold text-primary-dark">
							📅 El calendario completo de actividades 2026 estará disponible
							próximamente
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
