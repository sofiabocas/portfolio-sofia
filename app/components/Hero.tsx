"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-stone-50 via-emerald-50/30 to-teal-50 pt-14">
      <div className="max-w-5xl mx-auto px-6 md:px-8 w-full py-16 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-widest text-teal-600 mb-4 md:mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-teal-600 inline-block"></span>
              Analista · Santiago, Chile
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-teal-900 leading-tight mb-4 md:mb-6" style={{fontFamily: "Georgia, serif"}}>
              Control de Gestión<br />
              & <em className="text-amber-700 not-italic">Performance</em>
            </h1>
            <p className="text-sm md:text-base text-stone-500 leading-relaxed mb-6 md:mb-8 max-w-lg">
              Convierto datos operativos en decisiones. Me especializo en KPIs, análisis de variaciones y reportería que genera impacto real en eficiencia y resultados.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a href="#proyectos" className="px-5 md:px-7 py-3 bg-teal-900 text-white text-sm tracking-wide hover:bg-teal-700 transition-colors rounded-sm">
                Ver proyectos
              </a>
              <a href="#contacto" className="px-5 md:px-7 py-3 border border-teal-900 text-teal-900 text-sm tracking-wide hover:bg-teal-50 transition-colors rounded-sm">
                Contacto
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-56 h-64 md:w-72 md:h-80">
              <div className="absolute inset-0 rounded-sm overflow-hidden border border-teal-900/10">
                <Image
                  src="/sofia.jpg"
                  alt="Sofía Bocas"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-amber-400/40 rounded-sm pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}