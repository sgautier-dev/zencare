import type { Metadata } from "next"
import { Marcellus, Nunito_Sans } from "next/font/google"
import "./globals.css"

const marcellus = Marcellus({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-marcellus",
	weight: ["400"],
})

const nunito = Nunito_Sans({
	subsets: ["latin"],
	variable: "--font-nunito",
	display: "swap",
})

export const metadata: Metadata = {
	title: {
		template: "%s - ZenCare · Fundación Vivir un Buen Morir",
		default: "ZenCare · Fundación Vivir un Buen Morir",
	},
	description:
		"ZenCare es un espacio de formación y práctica creado por la Fundación Vivir un Buen Morir. Ofrecemos un enfoque contemplativo, ético y aconfesional del cuidado, integrando meditación, mindfulness y compasión para acompañar en el final de la vida, la salud mental y procesos de vulnerabilidad.",
	authors: [{ name: "Sébastien Gautier", url: "https://www.sgautier.dev" }],
	keywords: [
		"ZenCare",
		"Fundación Vivir un Buen Morir",
		"cuidado contemplativo",
		"atención consciente",
		"acompañamiento compasivo",
		"fin de vida",
		"meditación zen",
		"mindfulness",
		"cuidadores",
		"resiliencia",
	],
	openGraph: {
		title: "ZenCare · Cuidar desde la Presencia",
		description:
			"Un proyecto de la Fundación Vivir un Buen Morir para transformar la cultura de los cuidados con presencia plena, compasión y espiritualidad aplicada.",
		url: "https://zencare.es",
		siteName: "ZenCare",
		locale: "es_ES",
		type: "website",
	},
	metadataBase: new URL("https://zencare.es"),
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es" className={`${marcellus.variable} ${nunito.variable}`}>
			<body className="bg-bg-site text-main font-sans antialiased">
				{children}
			</body>
		</html>
	)
}
