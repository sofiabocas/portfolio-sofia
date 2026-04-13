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

const proyectos = [
  {
    id: 1,
    categoria: "ERP · Desarrollo propio",
    titulo: "Sukeen ERP — Sistema de gestión para restaurante",
    descripcion: "Diseñé y desarrollé un sistema ERP completo para centralizar la operación de un restaurante y negocio de delivery. Reemplazó hojas de Excel dispersas, centralizando ventas, egresos, pedidos, caja, fidelización y liquidaciones de apps de delivery. El sistema está activamente en uso y en desarrollo continuo, con nuevas funcionalidades agregadas cada semana.",
    objetivo: "Centralizar los datos operativos del negocio en un solo sistema, reemplazando hojas de Excel dispersas y permitiendo tomar decisiones en tiempo real.",
    conclusion: "El sistema redujo errores de registro, eliminó la dependencia de Excel como base de datos y permite visualizar KPIs del negocio en tiempo real desde cualquier dispositivo.",
    herramientas: ["Next.js", "PostgreSQL", "React", "TypeScript", "Vercel"],
    imagen: "/proyectos/sukeen.png",
    color: "from-teal-800 to-blue-800",
    destacado: true,
    modulos: ["Dashboard KPIs", "Pedidos / POS", "Ventas", "Egresos", "Cierre de Caja", "Apps delivery", "Cocina", "Deudores", "Ranking de productos", "Fidelización", "Comparativa mensual", "Perfil de cliente", "Usuarios", "Reportes automáticos por mail"],
  },
  {
    id: 2,
    categoria: "Logística · Red de distribución",
    titulo: "Diseño estratégico de red logística",
    descripcion: "Análisis de red logística nacional para empresa de retail. Asignación de ciudades a bodegas usando fórmula de Haversine, cálculo de costos logísticos ponderados por población y visualización en Power BI.",
    objetivo: "Diseñar una red de distribución eficiente para maximizar la cobertura poblacional y minimizar los costos logísticos de transporte en Chile.",
    conclusion: "Santiago emerge como la bodega más eficiente en cobertura y costos. El centro del país concentra la mayor densidad poblacional, mientras el sur requiere mayor inversión logística dada su dispersión geográfica.",
    herramientas: ["Power BI", "Excel"],
    imagen: "/proyectos/logistica.png",
    color: "from-teal-900 to-teal-600",
    destacado: false,
    modulos: [],
  },
  {
    id: 3,
    categoria: "Logística · KPIs operativos",
    titulo: "Evaluación de eficiencia operativa en entregas",
    descripcion: "Análisis de puntualidad, tipo de transporte y desempeño por bloque de almacén para una empresa logística simulada.",
    objetivo: "Identificar puntos críticos en la puntualidad de entrega, eficiencia logística según tipo de transporte y desempeño comparado entre bloques de almacén.",
    conclusion: "El 60% de entregas llegan a tiempo vs un objetivo del 85%. Existe una fuerte dependencia del transporte marítimo (68%) que impacta la cadena logística. Los productos de alta importancia tienen mejor cumplimiento.",
    herramientas: ["Power BI"],
    imagen: "/proyectos/eficiencia.png",
    color: "from-amber-800 to-amber-600",
    destacado: false,
    modulos: [],
  },
  {
    id: 4,
    categoria: "Logística · Condiciones externas",
    titulo: "Análisis de entregas y condiciones externas",
    descripcion: "Dashboard para anticipar focos de insatisfacción en logística, analizando cómo variables climáticas y de tráfico afectan los tiempos de entrega.",
    objetivo: "Anticipar focos de insatisfacción en el proceso logístico y mejorar la percepción del servicio mediante alertas tempranas y visualización de KPIs.",
    conclusion: "Solo el 1% de pedidos fueron retrasados. Se identificó una tendencia positiva en tiempos de entrega mes a mes. Las condiciones climáticas, aunque no controlables, pueden gestionarse con estrategias de comunicación.",
    herramientas: ["Power BI", "Excel"],
    imagen: "/proyectos/entregas.png",
    color: "from-stone-700 to-stone-500",
    destacado: false,
    modulos: [],
  },
  {
    id: 5,
    categoria: "Atención al cliente · Excel",
    titulo: "Análisis de experiencia del cliente",
    descripcion: "Dashboard en Excel con 100 registros ficticios para evaluar la experiencia del cliente a través de satisfacción, tiempo de respuesta y resolución de casos.",
    objetivo: "Analizar la experiencia del cliente mediante indicadores operativos para generar visualizaciones útiles en la toma de decisiones estratégicas.",
    conclusion: "Satisfacción promedio de 3.16/5 y solo 48% de casos resueltos. El canal de llamadas concentra el mayor nivel de insatisfacción (36.5%), sugiriendo revisar tiempos de atención y protocolos.",
    herramientas: ["Excel"],
    imagen: "/proyectos/cliente.png",
    color: "from-teal-700 to-emerald-500",
    destacado: false,
    modulos: [],
  },
  {
    id: 6,
    categoria: "Financial Analysis · E-Commerce",
    titulo: "E-Commerce Revenue Analysis: Amazon vs Alibaba vs eBay",
    descripcion: "Análisis comparativo de ingresos de las 3 mayores plataformas de e-commerce del mundo entre 2013 y 2023. Se consolidaron datos trimestrales, se calcularon variaciones año a año y participación de mercado por empresa.",
    objetivo: "Comparar el desempeño financiero de Amazon, Alibaba y eBay durante 11 años, identificando tendencias de crecimiento, variaciones y evolución del market share.",
    conclusion: "Amazon domina con $574B USD en 2023 y crecimiento sostenido. Alibaba tuvo su peak de crecimiento en 2018 con 58%. eBay pasó de representar un 17% del mercado en 2013 a menos del 2% en 2023, siendo prácticamente desplazada.",
    herramientas: ["Excel"],
    imagen: "/proyectos/ecommerce-revenue.png",
    color: "from-blue-800 to-teal-600",
    destacado: false,
    modulos: [],
  },
];

type Proyecto = typeof proyectos[0];

export default function Proyectos() {
  const [seleccionado, setSeleccionado] = useState<Proyecto | null>(null);

  return (
    <>
      <section id="proyectos" className="py-24 bg-stone-50 border-t border-teal-900/10">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <p className="text-xs uppercase tracking-widest text-teal-600 mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-teal-600 inline-block"></span>
              Proyectos
            </p>
            <h2 className="text-4xl font-light text-teal-900 mb-4 leading-snug" style={{fontFamily: "Georgia, serif"}}>
              Trabajo seleccionado
            </h2>
            <p className="text-sm text-stone-500 mb-12 max-w-lg leading-relaxed">
              Una selección de proyectos de análisis de datos, dashboards y soluciones operativas. Haz click en cada uno para ver el detalle.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {proyectos.map((p) => (
              <motion.div
                key={p.id}
                variants={fadeUp}
                onClick={() => setSeleccionado(p)}
                className={`bg-white border border-teal-900/10 rounded-sm overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-pointer ${p.destacado ? "md:col-span-2" : ""}`}
              >
                <div className={`relative h-48 ${p.destacado ? "md:h-56" : ""}`}>
                  {p.imagen ? (
                    <Image src={p.imagen} alt={p.titulo} fill className="object-cover" />
                  ) : (
                    <div className={`h-full bg-gradient-to-br ${p.color} flex items-end p-4`}>
                      <div className="flex gap-2 flex-wrap">
                        {p.herramientas.map((h) => (
                          <span key={h} className="text-xs px-3 py-1 bg-white/20 text-white rounded-full tracking-wide">{h}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {p.imagen && (
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/40 to-transparent flex gap-2 flex-wrap">
                      {p.herramientas.map((h) => (
                        <span key={h} className="text-xs px-3 py-1 bg-white/20 text-white rounded-full tracking-wide">{h}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  {p.destacado && (
                    <span className="text-xs px-3 py-1 bg-amber-100 text-amber-700 border border-amber-300 rounded-full tracking-wide mb-3 inline-block">
                      Proyecto destacado
                    </span>
                  )}
                  <p className="text-xs uppercase tracking-widest text-teal-600 mb-2">{p.categoria}</p>
                  <h3 className="text-lg font-medium text-teal-900 mb-3 leading-snug" style={{fontFamily: "Georgia, serif"}}>
                    {p.titulo}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{p.descripcion}</p>
                  <p className="text-xs text-teal-600 mt-4 tracking-wide">Ver detalle →</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {seleccionado && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setSeleccionado(null)}
        >
          <div
            className="bg-white rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              {seleccionado.imagen ? (
                <Image src={seleccionado.imagen} alt={seleccionado.titulo} fill className="object-cover" />
              ) : (
                <div className={`h-full bg-gradient-to-br ${seleccionado.color}`} />
              )}
              <button
                onClick={() => setSeleccionado(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full text-teal-900 text-sm font-medium flex items-center justify-center hover:bg-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <p className="text-xs uppercase tracking-widest text-teal-600 mb-2">{seleccionado.categoria}</p>
              <h3 className="text-2xl font-light text-teal-900 mb-6 leading-snug" style={{fontFamily: "Georgia, serif"}}>
                {seleccionado.titulo}
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">Objetivo</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{seleccionado.objetivo}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">Descripción</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{seleccionado.descripcion}</p>
                </div>
                {seleccionado.modulos.length > 0 && (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Módulos</p>
                    <div className="flex flex-wrap gap-2">
                      {seleccionado.modulos.map((m) => (
                        <span key={m} className="text-xs px-3 py-1 bg-teal-50 text-teal-800 rounded-full">{m}</span>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">Conclusión</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{seleccionado.conclusion}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Herramientas</p>
                  <div className="flex flex-wrap gap-2">
                    {seleccionado.herramientas.map((h) => (
                      <span key={h} className="text-xs px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-full">{h}</span>
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