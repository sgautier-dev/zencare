"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Dialog, DialogPanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import logo from "@/images/logo_zencare.png"
import { navigation } from "@/lib/navigation"

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [isAtTop, setIsAtTop] = useState(true)

	useEffect(() => {
		const handleScroll = () => {
			setIsAtTop(window.scrollY === 0)
		}

		window.addEventListener("scroll", handleScroll)

		// Clean up on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<header
			className={`sticky top-0 z-20 transition-colors duration-300 ${
				isAtTop ? "bg-bg-site" : "bg-bg-site/80 backdrop-blur-md"
			}`}
		>
			<nav
				aria-label="Global"
				className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8"
			>
				<div className="flex flex-1">
					<div className="hidden lg:flex lg:gap-x-6">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-sm/6 sm:text-base/6 font-semibold"
							>
								{item.name}
							</a>
						))}
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							onClick={() => setMobileMenuOpen(true)}
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon aria-hidden="true" className="size-6" />
						</button>
					</div>
				</div>
				<a href="/" className="-m-1.5 p-1.5">
					<span className="sr-only">ZenCare</span>
					<Image
						alt="logo, zencare"
						src={logo}
						className="h-28 sm:h-36 w-auto"
					/>
				</a>
				<div className="flex flex-1 justify-end">
					<a href="#contact" className="text-sm/6 sm:text-base/6 font-semibold">
						Contacto{" "}
						<span className="text-secondary hidden sm:inline" aria-hidden="true">
							&#10095;
						</span>
					</a>
				</div>
			</nav>
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-bg-site px-4 py-3">
					<div className="flex items-center justify-between">
						<div className="flex flex-1">
							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="-m-2.5 rounded-md p-2.5"
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon aria-hidden="true" className="size-6" />
							</button>
						</div>
						<a
							href="/"
							className="-m-1.5 p-1.5"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">ZenCare</span>
							<Image
								alt="logo, zencare"
								src={logo}
								className="h-28 sm:h-36 w-auto"
							/>
						</a>
						<div className="flex flex-1 justify-end">
							<a
								href="#contact"
								className="text-sm/6 sm:text-base/6 font-semibold"
								onClick={() => setMobileMenuOpen(false)}
							>
								Contacto{" "}
								<span className="text-secondary hidden sm:inline" aria-hidden="true">
									&#10095;
								</span>
							</a>
						</div>
					</div>
					<div className="mt-6 space-y-2">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								onClick={() => setMobileMenuOpen(false)}
								className="-mx-3 block rounded-lg px-3 py-2 text-sm/7 sm:text-base/7 font-semibold hover:bg-gray-100 dark:hover:bg-white/5"
							>
								{item.name}
							</a>
						))}
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	)
}
