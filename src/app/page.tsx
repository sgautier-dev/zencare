import Activities from "@/components/Activities"
import Benefits from "@/components/Benefits"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Practices from "@/components/Practices"
import Whatis from "@/components/Whatis"

export default function Home() {
	return (
		<main className="flex flex-col justify-center mx-auto">
			<Header />
			<Hero />
			<Whatis />
			<Benefits />
			<Practices />
			<Activities />
			<Contact />
			<Footer />
		</main>
	)
}
