export default function NavbarEn() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 bg-white/90 backdrop-blur-sm border-b border-teal-900/10">
      <span className="font-serif text-base text-teal-900 tracking-wide whitespace-nowrap">
        Sofía Bocas
      </span>
      <ul className="flex gap-4 md:gap-8 list-none">
        <li><a href="#about" className="text-xs uppercase tracking-widest text-teal-700 hover:text-teal-500 transition-colors hidden md:block">About</a></li>
        <li><a href="#certifications" className="text-xs uppercase tracking-widest text-teal-700 hover:text-teal-500 transition-colors hidden md:block">Certifications</a></li>
        <li><a href="#projects" className="text-xs uppercase tracking-widest text-teal-700 hover:text-teal-500 transition-colors hidden md:block">Projects</a></li>
        <li><a href="#contact" className="text-xs uppercase tracking-widest text-teal-700 hover:text-teal-500 transition-colors hidden md:block">Contact</a></li>
        <li><a href="/" className="text-xs uppercase tracking-widest text-amber-700 hover:text-amber-500 transition-colors">ES</a></li>
      </ul>
    </nav>
  );
}