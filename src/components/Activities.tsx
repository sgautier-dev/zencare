// app/(sections)/Activities.tsx
import Image from "next/image"
import talleresImg from "@/images/talleres.jpeg"
import bienestarImg from "@/images/bienestar.jpg"
import zazenImg from "@/images/mar-zazen.jpg"
import retirosImg from "@/images/retiros.jpeg"
import onlineImg from "@/images/online.jpg"

export default function Activities() {
	return (
		<section className="mt-32 scroll-mt-36 sm:mt-56 sm:scroll-mt-44" id="activities">
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
										Práctica presencial y por Zoom: lunes, miércoles y jueves
										a las 20:00; sábados a las 9:00.
									</li>
									<li>
										Curso inicial online de cinco sesiones antes de incorporarse
										al grupo.
									</li>
									<li>Retiros intensivos ZenCare programados para 2027.</li>
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
									<li>
										Curso inicial online (cinco sesiones + material escrito).
									</li>
									<li>Guías prácticas, meditaciones guiadas, artículos.</li>
									<li>Acceso online a contenidos formativos.</li>
								</ul>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl dark:outline-white/10" />
					</div>
				</div>

				{/* Meditation schedule, retreats, and participation details */}
				<div
					id="meditacion-zencare"
					className="mt-12 scroll-mt-36 rounded-3xl bg-white px-6 py-10 shadow-sm ring-1 ring-black/5 dark:bg-stone-900 dark:ring-white/10 sm:mt-16 sm:scroll-mt-44 sm:px-10"
				>
					<h3 className="text-3xl font-main font-semibold text-title sm:text-4xl">
						Grupo de meditación VBM · ZenCare
					</h3>
					<p className="mt-5 max-w-4xl text-lg/8 text-subtle">
						La meditación es un espacio de práctica y aprendizaje para
						desarrollar una presencia más consciente y compasiva. A través
						del silencio, la atención y las enseñanzas contemplativas,
						cultivamos recursos para el autocuidado y para acompañar a otras
						personas, especialmente en situaciones de vulnerabilidad. El
						grupo está abierto tanto a quienes desean iniciarse como a
						quienes buscan continuidad en su práctica, de acuerdo con las
						condiciones de participación vigentes.
					</p>

					<div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
						<section aria-labelledby="meditacion-horarios">
							<h4
								id="meditacion-horarios"
								className="text-xl font-semibold text-title"
							>
								Meditación semanal
							</h4>
							<p className="mt-3 text-subtle">
								Práctica presencial y online por Zoom.
							</p>
							<ul className="mt-3 list-disc space-y-2 pl-5 text-subtle">
								<li>Lunes, miércoles y jueves a las 20:00.</li>
								<li>Sábados a las 9:00.</li>
							</ul>
						</section>

						<section aria-labelledby="meditacion-iniciacion">
							<h4
								id="meditacion-iniciacion"
								className="text-xl font-semibold text-title"
							>
								Curso inicial de meditación
							</h4>
							<p className="mt-3 text-subtle">
								Cinco sesiones online de enseñanzas y práctica, necesarias
								antes de incorporarse a la meditación semanal.
							</p>
							<p className="mt-3 font-semibold text-title">
								Aportación del ciclo: 95 €.
							</p>
						</section>

						<section aria-labelledby="meditacion-retiros">
							<h4
								id="meditacion-retiros"
								className="text-xl font-semibold text-title"
							>
								Retiros de meditación ZenCare 2027
							</h4>
							<ol className="mt-3 list-decimal space-y-2 pl-5 text-subtle">
								<li>9–10 de enero de 2027.</li>
								<li>3–4 de abril de 2027.</li>
								<li>24–25 de septiembre de 2027.</li>
								<li>4–5 de diciembre de 2027.</li>
							</ol>
							<p className="mt-3 text-sm text-subtle">
								Confirmar el lugar, la modalidad y las horas concretas
								de llegada y salida al solicitar cada inscripción.
							</p>
						</section>

						<section aria-labelledby="meditacion-condiciones">
							<h4
								id="meditacion-condiciones"
								className="text-xl font-semibold text-title"
							>
								Condiciones y aportaciones
							</h4>
							<p className="mt-3 text-subtle">
								Para la práctica semanal se requiere haber realizado el
								curso inicial y tener la condición de Miembro VBM.
							</p>
							<ul className="mt-3 list-disc space-y-2 pl-5 text-subtle">
								<li>Miembro VBM: 180 € al año o 15 € al mes.</li>
								<li>Meditación por Zoom: 10 € al mes.</li>
								<li>Meditación presencial: 20 € al mes.</li>
							</ul>
							<p className="mt-3 text-sm text-subtle">
								Para la meditación por Zoom, conectarse diez minutos antes
								del comienzo de la sesión.
							</p>
						</section>
					</div>

					<div className="mt-10 border-t border-black/10 pt-7 dark:border-white/10">
						<p className="max-w-3xl text-subtle">
							Puedes solicitar información e inscripción mediante el formulario de
							contacto de ZenCare. La Fundación confirmará personalmente la
							disponibilidad y las condiciones de pago. Esta consulta no
							reserva automáticamente una plaza.
						</p>
						<div className="mt-5 flex flex-wrap gap-4">
							<a
								href="https://vivirunbuenmorir.es/colabora/"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center rounded-md border border-primary-dark px-5 py-3 font-semibold text-title hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark dark:focus-visible:outline-primary"
							>
								Consultar cuotas de Miembro VBM ↗
							</a>
							<a
								href="#contact"
								className="inline-flex items-center rounded-md bg-primary px-5 py-3 font-semibold text-black hover:bg-primary-dark/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark dark:focus-visible:outline-primary"
							>
								Solicitar inscripción
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
