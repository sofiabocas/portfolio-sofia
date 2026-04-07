"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroEn() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-stone-50 via-emerald-50/30 to-teal-50 pt-14">
      <div className="max-w-5xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-widest text-teal-600 mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-teal-600 inline-block"></span>
              Analyst · Santiago, Chile
            </p>
            <h1 className="text-6xl font-light text-teal-900 leading-tight mb-6" style={{fontFamily: "Georgia, serif"}}>
              Management Control<br />
              & <em className="text-amber-700 not-italic">Performance</em>
            </h1>
            <p className="text-base text-stone-500 leading-relaxed mb-8 max-w-lg">
              I turn operational data into decisions. I specialize in KPIs, variance analysis and reporting that generates real impact on efficiency and results.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="px-7 py-3 bg-teal-900 text-white text-sm tracking-wide hover:bg-teal-700 transition-colors rounded-sm">
                View projects
              </a>
              <a href="#contact" className="px-7 py-3 border border-teal-900 text-teal-900 text-sm tracking-wide hover:bg-teal-50 transition-colors rounded-sm">
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-72 h-80">
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