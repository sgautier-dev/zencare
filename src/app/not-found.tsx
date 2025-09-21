import Link from "next/link"

export const metadata = {
  title: "Página no encontrada",
}

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 lg:px-8 bg-bg-site">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 text-3xl sm:text-5xl font-main font-semibold tracking-tight text-title">
          Página no encontrada
        </h1>
        <p className="mt-6 text-base leading-7 text-subtle">
          Lo sentimos, no hemos podido encontrar la página que buscas.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-primary-dark px-3.5 py-2.5 text-sm sm:text-base font-semibold text-white shadow-xs hover:bg-primary-dark/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  )
}
