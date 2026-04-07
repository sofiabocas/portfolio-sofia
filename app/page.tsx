import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SobreMi />
      <Proyectos />
      <Contacto />
    </main>
  );
}