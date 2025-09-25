// components/Notification.tsx
"use client"

import { useState, useEffect } from "react"
import { Transition } from "@headlessui/react"
import {
	CheckCircleIcon,
	ExclamationTriangleIcon,
	InformationCircleIcon,
	XMarkIcon,
} from "@heroicons/react/24/solid"

type Variant = "success" | "error" | "info"

interface NotificationProps {
	show: boolean
	onClose: () => void
	title: string
	message: string
	variant?: Variant
}

function getVariantStyles(variant: Variant) {
	switch (variant) {
		case "success":
			return {
				icon: (
					<CheckCircleIcon
						className="size-6 text-green-500"
						aria-hidden="true"
					/>
				),
				bgClass: "bg-white dark:bg-stone-900",
				titleClass: "text-title",
				messageClass: "text-subtle",
			}
		case "error":
			return {
				icon: (
					<ExclamationTriangleIcon
						className="size-6 text-secondary"
						aria-hidden="true"
					/>
				),
				bgClass: "bg-white dark:bg-stone-900",
				titleClass: "text-title",
				messageClass: "text-subtle",
			}
		case "info":
		default:
			return {
				icon: (
					<InformationCircleIcon
						className="size-6 text-accent"
						aria-hidden="true"
					/>
				),
				bgClass: "bg-white dark:bg-stone-900",
				titleClass: "text-title",
				messageClass: "text-subtle",
			}
	}
}

export default function Notification({
	show,
	onClose,
	title,
	message,
	variant = "info",
}: NotificationProps) {
	const [internalShow, setInternalShow] = useState(show)

	useEffect(() => {
		setInternalShow(show)
	}, [show])

	const { icon, bgClass, titleClass, messageClass } = getVariantStyles(variant)

	return (
		<div
			aria-live="assertive"
			className="pointer-events-none fixed inset-0 z-50 grid place-items-center px-4"
		>
			<Transition
				show={internalShow}
				enter="transition ease-out duration-300 transform"
				enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
				enterTo="translate-y-0 opacity-100 sm:translate-x-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<div
					className={`pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 dark:ring-white/10 ${bgClass}`}
					role="status"
				>
					<div className="p-4">
						<div className="flex items-start">
							<div className="shrink-0">{icon}</div>
							<div className="ml-3 w-0 flex-1 pt-0.5">
								<p className={`text-sm font-semibold ${titleClass}`}>{title}</p>
								<p className={`mt-1 text-sm ${messageClass}`}>{message}</p>
							</div>
							<div className="ml-4 flex shrink-0">
								<button
									type="button"
									onClick={() => {
										setInternalShow(false)
										onClose()
									}}
									className="inline-flex rounded-md p-1.5 text-subtle hover:opacity-80 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
								>
									<span className="sr-only">Cerrar</span>
									<XMarkIcon aria-hidden="true" className="size-5" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</Transition>
		</div>
	)
}
