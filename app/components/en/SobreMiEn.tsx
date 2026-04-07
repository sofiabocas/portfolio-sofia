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

const skills = [
  "Management Control", "Data Analysis", "Advanced Excel",
  "Google Sheets", "Power BI", "Basic SQL",
  "SAP SD", "Automation", "Operational Reporting",
  "KPIs & Variance Analysis", "Operational Planning", "Continuous Improvement"
];

export default function SobreMiEn() {
  return (
    <section id="about" className="py-24 bg-white border-t border-teal-900/10">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <p className="text-xs uppercase tracking-widest text-teal-600 mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-teal-600 inline-block"></span>
              About me
            </p>
            <h2 className="text-4xl font-light text-teal-900 mb-8 leading-snug" style={{fontFamily: "Georgia, serif"}}>
              Analysis that<br />drives results
            </h2>
            <div className="space-y-4 text-sm text-stone-500 leading-relaxed">
              <p>I am an analyst focused on <strong className="text-teal-900 font-medium">management control and operational performance</strong>, with experience in KPI tracking, variance analysis and reporting for decision-making.</p>
              <p>I focus on identifying deviations, understanding their root causes and proposing concrete improvements that impact efficiency and results. I have automated financial and sales reports in Excel and Google Sheets, reducing errors by 50%.</p>
              <p>What sets me apart: I not only analyze data, I also understand how the systems that generate it are built. I participated in the development of a <strong className="text-teal-900 font-medium">complete ERP system</strong> to centralize operational data for a real business.</p>
              <p>I am looking for management control or planning roles where analysis is at the core, not just a complement.</p>
            </div>
          </motion.div>

          <div>
            <p className="text-xs uppercase tracking-widest text-teal-600 mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-teal-600 inline-block"></span>
              Skills
            </p>
            <motion.div
              className="grid grid-cols-2 gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              {skills.map((s) => (
                <motion.div
                  key={s}
                  variants={fadeUp}
                  className="px-4 py-2 bg-teal-50 text-teal-900 text-xs font-medium tracking-wide rounded-sm"
                >
                  {s}
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}