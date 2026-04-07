export default function Contacto() {
  return (
    <>
      <section id="contacto" className="py-24 bg-teal-900 text-white">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-teal-400 mb-4 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-teal-400 inline-block"></span>
            Contacto
            <span className="w-6 h-px bg-teal-400 inline-block"></span>
          </p>
          <h2 className="text-4xl font-light text-white mb-6 leading-snug" style={{fontFamily: "Georgia, serif"}}>
            Trabajemos juntos
          </h2>
          <p className="text-sm text-teal-300 max-w-md mx-auto mb-10 leading-relaxed">
            Estoy disponible para roles de control de gestión, planificación y análisis de datos.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://www.linkedin.com/in/sofia-bocas" target="_blank" rel="noopener noreferrer" className="px-7 py-3 bg-amber-600 text-white text-sm tracking-wide hover:bg-amber-500 transition-colors rounded-sm">
              Ver perfil en LinkedIn
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-teal-950 py-6 text-center text-xs text-teal-700 tracking-widest uppercase">
        Sofia Bocas · {new Date().getFullYear()}
      </footer>
    </>
  );
}