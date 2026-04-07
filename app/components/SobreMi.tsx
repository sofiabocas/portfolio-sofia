export default function SobreMi() {
  const habilidades = [
    "Control de gestión", "Análisis de datos", "Excel Avanzado",
    "Google Sheets", "Power BI", "SQL básico",
    "SAP SD", "Automatización", "Reportería operacional",
    "KPIs & variaciones", "Planificación operativa", "Mejora continua"
  ];

  return (
    <section id="sobre-mi" className="py-24 bg-white border-t border-teal-900/10">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          <div>
            <p className="text-xs uppercase tracking-widest text-teal-600 mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-teal-600 inline-block"></span>
              Sobre mí
            </p>
            <h2 className="text-4xl font-light text-teal-900 mb-8 leading-snug" style={{fontFamily: 'Georgia, serif'}}>
              Análisis que<br />mueve resultados
            </h2>
            <div className="space-y-4 text-sm text-stone-500 leading-relaxed">
              <p>
                Soy analista orientada a <strong className="text-teal-900 font-medium">control de gestión y performance operacional</strong>, con experiencia en seguimiento de KPIs, análisis de variaciones y elaboración de reportes para la toma de decisiones.
              </p>
              <p>
                Me enfoco en identificar desviaciones, entender sus causas y proponer mejoras concretas que impacten en eficiencia y resultados. He automatizado reportes financieros y de ventas en Excel y Google Sheets, reduciendo errores en un 50%.
              </p>
              <p>
                Lo que me diferencia: no solo analizo los datos, también entiendo cómo se construyen los sistemas que los generan. Participé en el desarrollo de un <strong className="text-teal-900 font-medium">ERP completo</strong> para centralizar datos operativos de un negocio real.
              </p>
              <p>
                Busco roles de control de gestión o planificación donde el análisis sea el centro, no el complemento.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-teal-600 mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-teal-600 inline-block"></span>
              Habilidades
            </p>
            <div className="grid grid-cols-2 gap-2">
              {habilidades.map((h) => (
                <div key={h} className="px-4 py-2 bg-teal-50 text-teal-900 text-xs font-medium tracking-wide rounded-sm">
                  {h}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}