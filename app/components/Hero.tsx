export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-stone-50 via-emerald-50/30 to-teal-50 pt-14">
      <div className="max-w-5xl mx-auto px-8 w-full">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-teal-600 mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-teal-600 inline-block"></span>
            Analista · Santiago, Chile
          </p>
          <h1 className="text-6xl font-light text-teal-900 leading-tight mb-6" style={{fontFamily: 'Georgia, serif'}}>
            Control de Gestión<br />
            & <em className="text-amber-700 not-italic">Performance</em>
          </h1>
          <p className="text-base text-stone-500 leading-relaxed mb-8 max-w-lg">
            Convierto datos operativos en decisiones. Me especializo en KPIs, análisis de variaciones y reportería que genera impacto real en eficiencia y resultados.
          </p>
          <div className="flex gap-4">
            <a href="#proyectos" className="px-7 py-3 bg-teal-900 text-white text-sm tracking-wide hover:bg-teal-700 transition-colors rounded-sm">
              Ver proyectos
            </a>
            <a href="#contacto" className="px-7 py-3 border border-teal-900 text-teal-900 text-sm tracking-wide hover:bg-teal-50 transition-colors rounded-sm">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}