const proyectos = [
  {
    id: 1,
    categoria: "ERP · Desarrollo propio",
    titulo: "Sukeen ERP — Sistema de gestión para restaurante",
    descripcion: "Diseñé y desarrollé un sistema ERP completo para centralizar la operación de un restaurante y negocio de delivery. Reemplazó hojas de Excel dispersas, centralizando ventas, egresos, pedidos, caja, fidelización y liquidaciones de Rappi, PedidosYa y UberEats. Incluye dashboard con KPIs en tiempo real, 14 módulos y 4 roles de usuario.",
    herramientas: ["Next.js", "PostgreSQL", "React", "TypeScript"],
    color: "from-teal-800 to-blue-800",
    destacado: true,
  },
  {
    id: 2,
    categoria: "Logística · Red de distribución",
    titulo: "Diseño estratégico de red logística",
    descripcion: "Análisis de red logística nacional para empresa de retail. Asignación de ciudades a bodegas usando fórmula de Haversine, cálculo de costos logísticos ponderados por población y visualización en Power BI con mapa geoespacial y KPIs por macrozona.",
    herramientas: ["Power BI", "Excel"],
    color: "from-teal-900 to-teal-600",
    destacado: false,
  },
  {
    id: 3,
    categoria: "Logística · KPIs operativos",
    titulo: "Evaluación de eficiencia operativa en entregas",
    descripcion: "Análisis de puntualidad, tipo de transporte y desempeño por bloque de almacén. El dashboard identifica que el 60% de entregas llegan a tiempo vs un objetivo de 85%, con dependencia del 68% en transporte marítimo.",
    herramientas: ["Power BI"],
    color: "from-amber-800 to-amber-600",
    destacado: false,
  },
  {
    id: 4,
    categoria: "Logística · Condiciones externas",
    titulo: "Análisis de entregas y condiciones externas",
    descripcion: "Dashboard para anticipar focos de insatisfacción en logística. Analiza cómo variables climáticas y de tráfico afectan los tiempos de entrega, mostrando tendencia positiva mes a mes y un 1% de pedidos retrasados.",
    herramientas: ["Power BI", "Excel"],
    color: "from-stone-700 to-stone-500",
    destacado: false,
  },
  {
    id: 5,
    categoria: "Atención al cliente · Excel",
    titulo: "Análisis de experiencia del cliente",
    descripcion: "Dashboard en Excel con 100 registros ficticios. Identifica satisfacción promedio de 3.16/5, 48% de casos resueltos y que el canal de llamadas concentra el mayor nivel de insatisfacción (36.5%).",
    herramientas: ["Excel"],
    color: "from-teal-700 to-emerald-500",
    destacado: false,
  },
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-24 bg-stone-50 border-t border-teal-900/10">
      <div className="max-w-5xl mx-auto px-8">
        <p className="text-xs uppercase tracking-widest text-teal-600 mb-4 flex items-center gap-3">
          <span className="w-6 h-px bg-teal-600 inline-block"></span>
          Proyectos
        </p>
        <h2 className="text-4xl font-light text-teal-900 mb-4 leading-snug" style={{fontFamily: 'Georgia, serif'}}>
          Trabajo seleccionado
        </h2>
        <p className="text-sm text-stone-500 mb-12 max-w-lg leading-relaxed">
          Una selección de proyectos de análisis de datos, dashboards y soluciones operativas — construidos con datos reales y simulados.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proyectos.map((p) => (
            <div
              key={p.id}
              className={`bg-white border border-teal-900/10 rounded-sm overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ${p.destacado ? "md:col-span-2" : ""}`}
            >
              <div className={`h-36 bg-gradient-to-br ${p.color} flex items-end p-4 ${p.destacado ? "md:h-44" : ""}`}>
                <div className="flex gap-2 flex-wrap">
                  {p.herramientas.map((h) => (
                    <span key={h} className="text-xs px-3 py-1 bg-white/20 text-white rounded-full tracking-wide">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                {p.destacado && (
                  <span className="text-xs px-3 py-1 bg-amber-100 text-amber-700 border border-amber-300 rounded-full tracking-wide mb-3 inline-block">
                    Proyecto destacado
                  </span>
                )}
                <p className="text-xs uppercase tracking-widest text-teal-600 mb-2">{p.categoria}</p>
                <h3 className="text-lg font-medium text-teal-900 mb-3 leading-snug" style={{fontFamily: 'Georgia, serif'}}>
                  {p.titulo}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">{p.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}