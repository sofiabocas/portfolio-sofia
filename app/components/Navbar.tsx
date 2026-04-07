export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-8 bg-white/90 backdrop-blur-sm border-b border-teal-900/10">
      <span className="font-serif text-lg text-teal-900 tracking-wide">
        Sofía Bocas
      </span>
      <ul className="flex gap-8 list-none">
        <li><a href="#sobre-mi" className="text-xs uppercase tracking-widest text-teal-700 hover:text-teal-500 transition-colors">Sobre mí</a></li>
        <li><a href="#proyectos" className="text-xs uppercase tracking-widest text-teal-700 hover:text-teal-500 transition-colors">Proyectos</a></li>
        <li><a href="#contacto" className="text-xs uppercase tracking-widest text-teal-700 hover:text-teal-500 transition-colors">Contacto</a></li>
      </ul>
    </nav>
  );
}