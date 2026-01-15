import BackgroundAnimation from "@/components/BackgroundAnimation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Cpu, Globe, Rocket, Shield, Zap, ExternalLink } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Software Development",
    description: "Custom solutions built with modern architectures and cutting-edge technologies."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud environments tailored to your business needs."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Solutions",
    description: "High-performance web applications with seamless user experiences."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersecurity",
    description: "Advanced protection systems to keep your digital assets safe and sound."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "System Optimization",
    description: "Turbocharge your existing platforms for maximum efficiency and speed."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Digital Strategy",
    description: "Expert guidance to navigate the evolving digital landscape successfully."
  }
];

const projects = [
  {
    title: "Cabañas del Sol",
    category: "Real Estate / Vacation",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fcabanas-3.vercel.app?w=800",
    description: "Modern vacation rental experience with seamless booking integration.",
    link: "https://cabanas-3.vercel.app"
  },
  {
    title: "Solar Design Studio",
    category: "Architecture / Sustainability",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fsolar-design-studio-frontend-erix.vercel.app?w=800",
    description: "Eco-friendly architectural design platform focusing on solar energy.",
    link: "https://solar-design-studio-frontend-erix.vercel.app"
  },
  {
    title: "Bungalows Los Pinos",
    category: "Hospitality",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fbung-los-pinos.vercel.app?w=800",
    description: "Nature-focused retreat management and digital presence.",
    link: "https://bung-los-pinos.vercel.app"
  }
];

export default function Home() {
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const navY = useTransform(scrollY, [0, 100], [0, -20]);

  return (
    <div className="min-h-screen w-full relative text-white selection:bg-white/20">
      <BackgroundAnimation />
      
      {/* Navbar */}
      <motion.nav 
        style={{ opacity: navOpacity, y: navY }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-transparent pointer-events-none [&_a]:pointer-events-auto"
      >
        <div className="text-2xl font-display font-black tracking-tighter">
          PARCOD
        </div>
        <div className="hidden md:flex items-center gap-8 font-sans font-medium uppercase tracking-widest text-sm text-white/70">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="px-5 py-2 border border-white/20 hover:border-white transition-colors rounded-full">Contact</a>
        </div>
      </motion.nav>

      {/* Hero Section */}
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
              Digital Experience
            </motion.p>
          </motion.div>
        </main>
      </section>

      {/* About/Description Section */}
      <section className="py-24 px-8 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 relative inline-block">
            Crafting Digital Futures
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white to-transparent" />
          </h2>
          <p className="text-xl md:text-2xl font-sans leading-relaxed text-white/70 italic">
            "At PARCOD, we blend cutting-edge technology with disruptive design to create digital experiences that don't just exist—they resonate. We are architects of the virtual, dedicated to pushing the boundaries of what's possible."
          </p>
        </motion.div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 relative inline-block group">
            Featured Work
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
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                  <div className="flex flex-col items-center gap-2">
                    <ExternalLink className="w-12 h-12 text-white/80" />
                    <span className="text-xs font-sans tracking-widest uppercase text-white/60">Visit Project</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-sans tracking-widest text-white/40 uppercase">{project.category}</span>
                <h3 className="text-2xl font-display font-bold group-hover:text-white/80 transition-colors">{project.title}</h3>
                <p className="text-white/50 font-sans text-sm leading-relaxed max-w-xs">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 relative inline-block">
            Our Services
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white to-transparent" />
          </h2>
          <div className="h-px w-24 bg-white/20 mt-4" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-white/20 bg-black/40 backdrop-blur-xl rounded-2xl hover:border-white/40 hover:bg-black/60 transition-all group shadow-2xl shadow-black/50"
            >
              <div className="mb-6 text-white/50 group-hover:text-white transition-colors group-hover:scale-110 duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-white/70 font-sans leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="py-12 text-center text-white/30 font-sans text-sm border-t border-white/5 mt-24">
        © 2026 PARCOD. All rights reserved.
      </footer>
    </div>
  );
}
