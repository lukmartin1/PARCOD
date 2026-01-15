"use client"

import BackgroundAnimation from "@/components/BackgroundAnimation"
import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Cabañas del Sol",
    category: "Inmobiliaria / Vacacional",
    image: "/placeholder.svg?height=400&width=600",
    description: "Experiencia moderna de alquiler vacacional con integración de reservas sin fisuras.",
    link: "https://cabanas-3.vercel.app",
  },
  {
    title: "Solar Design Studio",
    category: "Arquitectura / Sostenibilidad",
    image: "/placeholder.svg?height=400&width=600",
    description: "Plataforma de diseño arquitectónico ecológico enfocada en energía solar.",
    link: "https://solar-design-studio-frontend-erix.vercel.app",
  },
  {
    title: "Bungalows Los Pinos",
    category: "Hospitalidad",
    image: "/placeholder.svg?height=400&width=600",
    description: "Gestión de retiro enfocado en la naturaleza y presencia digital.",
    link: "https://bung-los-pinos.vercel.app",
  },
]

export default function Home() {
  const { scrollY } = useScroll()
  const navOpacity = useTransform(scrollY, [0, 100], [1, 0])
  const navY = useTransform(scrollY, [0, 100], [0, -20])

  return (
    <div className="min-h-screen w-full relative text-white selection:bg-white/20">
      <BackgroundAnimation />

      <motion.nav
        style={{ opacity: navOpacity, y: navY }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-transparent pointer-events-none [&_a]:pointer-events-auto"
      >
        <div className="text-2xl font-display font-black tracking-tighter">PARCOD</div>
        <div className="hidden md:flex items-center gap-8 font-sans font-medium uppercase tracking-widest text-sm text-white/70">
          <a href="#" className="hover:text-white transition-colors">
            Inicio
          </a>
          <a href="#contacto" className="hover:text-white transition-colors">
            Contacto
          </a>
          <a href="#trabajo" className="hover:text-white transition-colors">
            Trabajo
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Nosotros
          </a>
          <a
            href="#contacto"
            className="px-5 py-2 border border-white/20 hover:border-white transition-colors rounded-full"
          >
            Contacto
          </a>
        </div>
      </motion.nav>

      <section className="min-h-screen flex items-center justify-center px-4">
        <main className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <h1
              className="text-[15vw] md:text-[12rem] font-black tracking-tighter leading-none select-none mix-blend-overlay opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl pointer-events-none"
              aria-hidden="true"
            >
              PARCOD
            </h1>

            <h1 className="text-[12vw] md:text-[10rem] font-display font-black tracking-tighter leading-none relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              PARCOD
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 text-lg md:text-2xl font-sans tracking-[0.5em] text-white/60 uppercase"
            >
              Experiencia Digital
            </motion.p>
          </motion.div>
        </main>
      </section>

      <section className="py-24 px-8 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 relative inline-block group">
            Tu Futuro Digital
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white to-transparent transform origin-left transition-transform duration-500" />
          </h2>
          <p className="text-xl md:text-2xl font-sans leading-relaxed text-white/70 italic">
            "En PARCODE combinamos tecnología y diseño para crear sitios web funcionales, atractivos y optimizados.
              Trabajamos de forma directa y personalizada para que tu presencia online sea clara, profesional y eficiente."
          </p>
        </motion.div>
      </section>

      <section id="trabajo" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 relative inline-block group">
            Trabajo Destacado
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white to-transparent transform origin-left transition-transform duration-500" />
          </h2>
          <div className="h-px w-24 bg-white/20 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-white/5 border border-white/10">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                  <div className="flex flex-col items-center gap-2">
                    <ExternalLink className="w-12 h-12 text-white/80" />
                    <span className="text-xs font-sans tracking-widest uppercase text-white/60">Visitar Proyecto</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-sans tracking-widest text-white/40 uppercase">{project.category}</span>
                <h3 className="text-2xl font-display font-bold group-hover:text-white/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 font-sans text-sm leading-relaxed max-w-xs">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="contacto" className="relative w-full py-24 px-4 sm:px-8 lg:px-8 max-w-6xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-10% via-black/70 to-black/90 -z-10" />

        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 relative inline-block">
            Contacto
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white to-transparent" />
          </h2>
          <div className="h-px w-24 bg-white/20 mt-4" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h3 className="text-3xl font-display font-bold mb-6">Hablemos de tu proyecto</h3>
          <p className="text-white/70 font-sans leading-relaxed text-lg mb-12">
            Estamos listos para convertir tus ideas en realidad digital. Contáctanos por WhatsApp y comencemos a
            construir algo extraordinario juntos.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 hover:border-white rounded-2xl text-white font-display font-semibold transition-all shadow-lg hover:shadow-white/20 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp 1
            </a>

            <a
              href="https://wa.me/0987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 hover:border-white rounded-2xl text-white font-display font-semibold transition-all shadow-lg hover:shadow-white/20 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp 2
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="bg-black py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-display font-black tracking-tighter">PARCOD</div>
            <p className="text-white/40 font-sans text-sm">© 2026 PARCOD. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6 text-white/40 font-sans text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Términos
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
