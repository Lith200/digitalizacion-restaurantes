import { restaurantData } from "@/data/restaurant";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-6 text-white">

        <h1 className="text-xl md:text-2xl font-bold">
          {restaurantData.name}
        </h1>

        <div className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-green-400 transition">
            Nosotros
          </a>

          <a href="#menu" className="hover:text-green-400 transition">
            Menú
          </a>

          <a href="#gallery" className="hover:text-green-400 transition">
            Galería
          </a>

          <a href="#contact" className="hover:text-green-400 transition">
            Contacto
          </a>
        </div>

      </nav>
    </header>
  );
}