export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 bg-white/90 backdrop-blur-sm border-b border-teal-900/10">
      <span className="font-serif text-base text-teal-900 tracking-wide whitespace-nowrap">
        Sofía Bocas
      </span>
      <ul className="flex gap-4 md:gap-8 list-none">
        <li><a href="#sobre-mi" className="text-xs uppercase tracking-widest text-teal-700 hover:text-teal-500 transition-colors hidden md:block">Sobre mí</a></li>
        <li><a href="#proyectos" className="text-xs uppercase tracking-widest text-teal-700 hover:text-teal-500 transition-colors hidden md:block">Proyectos</a></li>
        <li><a href="#contacto" className="text-xs uppercase tracking-widest text-teal-700 hover:text-teal-500 transition-colors hidden md:block">Contacto</a></li>
        <li><a href="/en" className="text-xs uppercase tracking-widest text-amber-700 hover:text-amber-500 transition-colors">EN</a></li>
      </ul>
    </nav>
  );
}