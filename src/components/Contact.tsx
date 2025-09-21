// app/(sections)/Contact.tsx
"use client"

import Image from "next/image"
import contactImg from "@/images/contact.jpg"

export default function Contact() {
  return (
    <section className="relative mt-32 sm:mt-56">
      {/* Side image (right on lg+) */}
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <Image
          alt="zencare, contact"
          src={contactImg}
          className="h-64 w-full object-cover sm:h-80 lg:absolute lg:h-full"
          priority
        />
      </div>

      <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-4xl sm:text-5xl font-main tracking-tight text-title">
              Contacto
            </h2>
            <p className="mt-2 text-lg/8 text-subtle">
              ¿Tienes dudas sobre nuestras formaciones o actividades? Escríbenos y te respondemos pronto.
            </p>

            <form
              action="#"
              method="POST"
              className="mt-12"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {/* Nombre */}
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="block text-sm/6 font-semibold text-title">
                    Nombre
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-main outline-1 -outline-offset-1 outline-gray-300 placeholder:text-subtle focus:outline-2 focus:-outline-offset-2 focus:outline-primary-dark dark:bg-white/5 dark:text-title dark:outline-white/10 dark:placeholder:text-subtle"
                      placeholder="Tu nombre"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-title">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-main outline-1 -outline-offset-1 outline-gray-300 placeholder:text-subtle focus:outline-2 focus:-outline-offset-2 focus:outline-primary-dark dark:bg-white/5 dark:text-title dark:outline-white/10 dark:placeholder:text-subtle"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                {/* Teléfono (opcional) */}
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm/6">
                    <label htmlFor="phone" className="block font-semibold text-title">
                      Teléfono
                    </label>
                    <p id="phone-description" className="text-subtle">
                      Opcional
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-main outline-1 -outline-offset-1 outline-gray-300 placeholder:text-subtle focus:outline-2 focus:-outline-offset-2 focus:outline-primary-dark dark:bg-white/5 dark:text-title dark:outline-white/10 dark:placeholder:text-subtle"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>

                {/* Mensaje */}
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm/6">
                    <label htmlFor="message" className="block font-semibold text-title">
                      Mensaje
                    </label>
                    <p id="message-description" className="text-subtle">
                      Máx. 500 caracteres
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      maxLength={500}
                      aria-describedby="message-description"
                      required
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-main outline-1 -outline-offset-1 outline-gray-300 placeholder:text-subtle focus:outline-2 focus:-outline-offset-2 focus:outline-primary-dark dark:bg-white/5 dark:text-title dark:outline-white/10 dark:placeholder:text-subtle"
                      placeholder="Cuéntanos en qué te podemos ayudar"
                    />
                  </div>
                </div>

                {/* Consentimiento */}
                {/* <div className="sm:col-span-2">
                  <label className="flex items-start gap-3 text-sm/6 text-subtle">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      className="mt-1 size-4 rounded border border-gray-300 text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark dark:border-white/10"
                    />
                    <span>
                      Acepto que ZenCare utilice mis datos para responder a mi consulta.{" "}
                      <a href="/privacy" className="underline decoration-primary-dark hover:opacity-80">
                        Política de privacidad
                      </a>
                      .
                    </span>
                  </label>
                </div> */}
              </div>

              {/* CTA */}
              <div className="mt-10 flex justify-end border-t border-black/5 pt-8 dark:border-white/10">
                <button
                  type="submit"
                  className="rounded-md bg-primary-dark px-3.5 py-2.5 text-sm sm:text-base font-semibold text-white shadow-xs hover:bg-primary-dark/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
