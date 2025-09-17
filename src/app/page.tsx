import Benefits from "@/components/Benefits"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Whatis from "@/components/Whatis"

export default function Home() {
	return (
		<main className="flex flex-col justify-center mx-auto">
			<Header />
			<Hero />
			<Whatis />
			<Benefits />
		</main>
	)
}
