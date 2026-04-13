"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const projects = [
  {
    id: 1,
    category: "ERP · Own development",
    title: "Sukeen ERP — Restaurant management system",
    description: "I designed and developed a complete ERP system to centralize the operation of a restaurant and delivery business. It replaced scattered Excel sheets, centralizing sales, expenses, orders, cash register, loyalty and delivery app settlements.",
    objective: "Centralize the business operational data in a single system, replacing scattered Excel sheets and enabling real-time decision-making.",
    conclusion: "The system reduced recording errors by 50%, eliminated Excel dependency as a database and enabled immediate visualization of business KPIs from any device.",
    tools: ["Next.js", "PostgreSQL", "React", "TypeScript", "Vercel"],
    image: "/proyectos/sukeen.png",
    color: "from-teal-800 to-blue-800",
    featured: true,
    modules: ["KPI Dashboard", "Orders", "Sales", "Expenses", "Cash Register", "Delivery Apps", "Kitchen", "Debtors", "Ranking", "Loyalty"],
  },
  {
    id: 2,
    category: "Logistics · Distribution network",
    title: "Strategic logistics network design",
    description: "National logistics network analysis for a retail company. City-to-warehouse assignment using the Haversine formula, logistics cost calculation weighted by population and Power BI visualization.",
    objective: "Design an efficient distribution network to maximize population coverage and minimize logistics transportation costs in Chile.",
    conclusion: "Santiago emerges as the most efficient warehouse in coverage and costs. The center of the country concentrates the highest population density, while the south requires greater logistics investment due to its geographic dispersion.",
    tools: ["Power BI", "Excel"],
    image: "/proyectos/logistica.png",
    color: "from-teal-900 to-teal-600",
    featured: false,
    modules: [],
  },
  {
    id: 3,
    category: "Logistics · Operational KPIs",
    title: "Operational efficiency evaluation in deliveries",
    description: "Analysis of punctuality, transport type and warehouse block performance for a simulated logistics company.",
    objective: "Identify critical points in delivery punctuality, logistics efficiency by transport type and comparative performance between warehouse blocks.",
    conclusion: "60% of deliveries arrive on time vs an 85% target. There is a strong dependence on maritime transport (68%) impacting the logistics chain. High importance products have better compliance.",
    tools: ["Power BI"],
    image: "/proyectos/eficiencia.png",
    color: "from-amber-800 to-amber-600",
    featured: false,
    modules: [],
  },
  {
    id: 4,
    category: "Logistics · External conditions",
    title: "Delivery and external conditions analysis",
    description: "Dashboard to anticipate dissatisfaction hotspots in logistics, analyzing how weather and traffic variables affect delivery times.",
    objective: "Anticipate dissatisfaction hotspots in the logistics process and improve service perception through early alerts and KPI visualization.",
    conclusion: "Only 1% of orders were delayed. A positive trend in delivery times month over month was identified. Weather conditions, though uncontrollable, can be managed with communication strategies.",
    tools: ["Power BI", "Excel"],
    image: "/proyectos/entregas.png",
    color: "from-stone-700 to-stone-500",
    featured: false,
    modules: [],
  },
  {
    id: 5,
    category: "Customer service · Excel",
    title: "Customer experience analysis",
    description: "Excel dashboard with 100 fictional records to evaluate customer experience through satisfaction, response time and case resolution.",
    objective: "Analyze customer experience through operational indicators to generate useful visualizations for strategic decision-making.",
    conclusion: "Average satisfaction of 3.16/5 and only 48% of cases resolved. The phone channel concentrates the highest dissatisfaction level (36.5%), suggesting a review of response times and protocols.",
    tools: ["Excel"],
    image: "/proyectos/cliente.png",
    color: "from-teal-700 to-emerald-500",
    featured: false,
    modules: [],
  },
  {
    id: 6,
    category: "Financial Analysis · E-Commerce",
    title: "E-Commerce Revenue Analysis: Amazon vs Alibaba vs eBay",
    description: "Comparative analysis of revenues from the 3 largest e-commerce platforms worldwide between 2013 and 2023. Quarterly data was consolidated, year-over-year variations and market share by company were calculated.",
    objective: "Compare the financial performance of Amazon, Alibaba and eBay over 11 years, identifying growth trends, variations and market share evolution.",
    conclusion: "Amazon dominates with $574B USD in 2023 and sustained growth. Alibaba peaked at 58% growth in 2018. eBay went from 17% market share in 2013 to less than 2% in 2023, being virtually displaced.",
    tools: ["Excel"],
    image: "/proyectos/ecommerce-revenue.png",
    color: "from-blue-800 to-teal-600",
    featured: false,
    modules: [],
  },
];

type Project = typeof projects[0];

export default function ProyectosEn() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-24 bg-stone-50 border-t border-teal-900/10">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <p className="text-xs uppercase tracking-widest text-teal-600 mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-teal-600 inline-block"></span>
              Projects
            </p>
            <h2 className="text-4xl font-light text-teal-900 mb-4 leading-snug" style={{fontFamily: "Georgia, serif"}}>
              Selected work
            </h2>
            <p className="text-sm text-stone-500 mb-12 max-w-lg leading-relaxed">
              A selection of data analysis projects, dashboards and operational solutions. Click on each one to see the details.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {projects.map((p) => (
              <motion.div
                key={p.id}
                variants={fadeUp}
                onClick={() => setSelected(p)}
                className={`bg-white border border-teal-900/10 rounded-sm overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-pointer ${p.featured ? "md:col-span-2" : ""}`}
              >
                <div className={`relative h-48 ${p.featured ? "md:h-56" : ""}`}>
                  {p.image ? (
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                  ) : (
                    <div className={`h-full bg-gradient-to-br ${p.color} flex items-end p-4`}>
                      <div className="flex gap-2 flex-wrap">
                        {p.tools.map((t) => (
                          <span key={t} className="text-xs px-3 py-1 bg-white/20 text-white rounded-full tracking-wide">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {p.image && (
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/40 to-transparent flex gap-2 flex-wrap">
                      {p.tools.map((t) => (
                        <span key={t} className="text-xs px-3 py-1 bg-white/20 text-white rounded-full tracking-wide">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  {p.featured && (
                    <span className="text-xs px-3 py-1 bg-amber-100 text-amber-700 border border-amber-300 rounded-full tracking-wide mb-3 inline-block">
                      Featured project
                    </span>
                  )}
                  <p className="text-xs uppercase tracking-widest text-teal-600 mb-2">{p.category}</p>
                  <h3 className="text-lg font-medium text-teal-900 mb-3 leading-snug" style={{fontFamily: "Georgia, serif"}}>
                    {p.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{p.description}</p>
                  <p className="text-xs text-teal-600 mt-4 tracking-wide">View details →</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              {selected.image ? (
                <Image src={selected.image} alt={selected.title} fill className="object-cover" />
              ) : (
                <div className={`h-full bg-gradient-to-br ${selected.color}`} />
              )}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full text-teal-900 text-sm font-medium flex items-center justify-center hover:bg-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <p className="text-xs uppercase tracking-widest text-teal-600 mb-2">{selected.category}</p>
              <h3 className="text-2xl font-light text-teal-900 mb-6 leading-snug" style={{fontFamily: "Georgia, serif"}}>
                {selected.title}
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">Objective</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{selected.objective}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">Description</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{selected.description}</p>
                </div>
                {selected.modules.length > 0 && (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Modules</p>
                    <div className="flex flex-wrap gap-2">
                      {selected.modules.map((m) => (
                        <span key={m} className="text-xs px-3 py-1 bg-teal-50 text-teal-800 rounded-full">{m}</span>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">Conclusion</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{selected.conclusion}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.tools.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}