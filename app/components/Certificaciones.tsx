"use client";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const certificaciones = [
  { nombre: "Analyze Data to Answer Questions", entidad: "Google", plataforma: "Coursera", fecha: "Ene 2026", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { nombre: "Process Data from Dirty to Clean", entidad: "Google", plataforma: "Coursera", fecha: "Nov 2025", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { nombre: "Aprende SAP ERP", entidad: "LinkedIn", plataforma: "LinkedIn Learning", fecha: "Sep 2025", color: "bg-sky-50 border-sky-200 text-sky-800" },
  { nombre: "Excel Esencial (Office 365)", entidad: "LinkedIn", plataforma: "LinkedIn Learning", fecha: "Sep 2025", color: "bg-sky-50 border-sky-200 text-sky-800" },
  { nombre: "Prepare Data for Exploration", entidad: "Google", plataforma: "Coursera", fecha: "Ago 2025", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { nombre: "Supply Chain Logistics", entidad: "Rutgers University", plataforma: "Coursera", fecha: "Jul 2025", color: "bg-red-50 border-red-200 text-red-800" },
  { nombre: "Ask Questions to Make Data-Driven Decisions", entidad: "Google", plataforma: "Coursera", fecha: "Jul 2025", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { nombre: "Foundations: Data, Data, Everywhere", entidad: "Google", plataforma: "Coursera", fecha: "May 2025", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { nombre: "EF SET English Certificate B2", entidad: "EF SET", plataforma: "EF SET", fecha: "Abr 2025", color: "bg-teal-50 border-teal-200 text-teal-800" },
];

export default function Certificaciones() {
  return (
    <section id="certificaciones" className="py-24 bg-white border-t border-teal-900/10">
      <div className="max-w-5xl mx-auto px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <p className="text-xs uppercase tracking-widest text-teal-600 mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-teal-600 inline-block"></span>
            Certificaciones
          </p>
          <h2 className="text-4xl font-light text-teal-900 mb-4 leading-snug" style={{fontFamily: "Georgia, serif"}}>
            Formación continua
          </h2>
          <p className="text-sm text-stone-500 mb-12 max-w-lg leading-relaxed">
            Cursos y certificaciones completadas en análisis de datos, gestión y herramientas técnicas.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {certificaciones.map((c) => (
            <motion.div
              key={c.nombre}
              variants={fadeUp}
              className="bg-white border border-teal-900/10 rounded-sm p-5 hover:shadow-md transition-all duration-200"
            >
              <div className={`text-xs px-2 py-1 rounded-full border inline-block mb-3 ${c.color}`}>
                {c.plataforma}
              </div>
              <p className="text-sm font-medium text-teal-900 leading-snug mb-2">{c.nombre}</p>
              <p className="text-xs text-stone-400">{c.entidad} · {c.fecha}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}