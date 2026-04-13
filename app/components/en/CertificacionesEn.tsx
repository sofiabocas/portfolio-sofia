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

const certifications = [
  { name: "Analyze Data to Answer Questions", entity: "Google", platform: "Coursera", date: "Jan 2026", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { name: "Process Data from Dirty to Clean", entity: "Google", platform: "Coursera", date: "Nov 2025", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { name: "Learn SAP ERP", entity: "LinkedIn", platform: "LinkedIn Learning", date: "Sep 2025", color: "bg-sky-50 border-sky-200 text-sky-800" },
  { name: "Excel Essential (Office 365)", entity: "LinkedIn", platform: "LinkedIn Learning", date: "Sep 2025", color: "bg-sky-50 border-sky-200 text-sky-800" },
  { name: "Prepare Data for Exploration", entity: "Google", platform: "Coursera", date: "Aug 2025", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { name: "Supply Chain Logistics", entity: "Rutgers University", platform: "Coursera", date: "Jul 2025", color: "bg-red-50 border-red-200 text-red-800" },
  { name: "Ask Questions to Make Data-Driven Decisions", entity: "Google", platform: "Coursera", date: "Jul 2025", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { name: "Foundations: Data, Data, Everywhere", entity: "Google", platform: "Coursera", date: "May 2025", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { name: "EF SET English Certificate B2", entity: "EF SET", platform: "EF SET", date: "Apr 2025", color: "bg-teal-50 border-teal-200 text-teal-800" },
];

export default function CertificacionesEn() {
  return (
    <section id="certifications" className="py-24 bg-white border-t border-teal-900/10">
      <div className="max-w-5xl mx-auto px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <p className="text-xs uppercase tracking-widest text-teal-600 mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-teal-600 inline-block"></span>
            Certifications
          </p>
          <h2 className="text-4xl font-light text-teal-900 mb-4 leading-snug" style={{fontFamily: "Georgia, serif"}}>
            Continuous learning
          </h2>
          <p className="text-sm text-stone-500 mb-12 max-w-lg leading-relaxed">
            Completed courses and certifications in data analysis, management and technical tools.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {certifications.map((c) => (
            <motion.div
              key={c.name}
              variants={fadeUp}
              className="bg-white border border-teal-900/10 rounded-sm p-5 hover:shadow-md transition-all duration-200"
            >
              <div className={`text-xs px-2 py-1 rounded-full border inline-block mb-3 ${c.color}`}>
                {c.platform}
              </div>
              <p className="text-sm font-medium text-teal-900 leading-snug mb-2">{c.name}</p>
              <p className="text-xs text-stone-400">{c.entity} · {c.date}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}