"use client";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactoEn() {
  return (
    <>
      <section id="contact" className="py-24 bg-teal-900 text-white">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <p className="text-xs uppercase tracking-widest text-teal-400 mb-4 flex items-center justify-center gap-3">
              <span className="w-6 h-px bg-teal-400 inline-block"></span>
              Contact
              <span className="w-6 h-px bg-teal-400 inline-block"></span>
            </p>
            <h2 className="text-4xl font-light text-white mb-6 leading-snug" style={{fontFamily: "Georgia, serif"}}>
              Let's work together
            </h2>
            <p className="text-sm text-teal-300 max-w-md mx-auto mb-10 leading-relaxed">
              I am available for management control, planning and data analysis roles. If you have a project or an opportunity, reach out.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://www.linkedin.com/in/sofia-bocas" target="_blank" rel="noopener noreferrer" className="px-7 py-3 bg-amber-600 text-white text-sm tracking-wide hover:bg-amber-500 transition-colors rounded-sm">
                View LinkedIn profile
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-teal-950 py-6 text-center text-xs text-teal-700 tracking-widest uppercase">
        Sofia Bocas · {new Date().getFullYear()}
      </footer>
    </>
  );
}