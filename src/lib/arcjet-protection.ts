import arcjet, { shield, detectBot, fixedWindow, request } from "@arcjet/next"

const aj = arcjet({
	key: process.env.ARCJET_KEY!,
	rules: [
		shield({
			mode: "LIVE",
		}),
		detectBot({
			mode: "LIVE",
			allow: [],
		}),
		fixedWindow({
			mode: "LIVE",
			window: "1m",
			max: 5,
		}),
	],
})

export async function checkArcJetProtection() {
	const req = await request()
	const decision = await aj.protect(req)

	if (decision.isDenied()) {
		if (decision.reason.isRateLimit()) {
			throw new Error(
				"Demasiados intentos de envío. Vuelva a intentarlo más tarde."
			)
		}
		if (decision.reason.isBot()) {
			throw new Error("Eres un bot. Por favor, vete.")
		}
		throw new Error("Se ha producido un error.")
	}
}
