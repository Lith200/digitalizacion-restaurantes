export default function Navbar() {
    return (
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">
            La Fogata
          </h1>
  
          <div className="flex gap-6">
            <a href="#about">Nosotros</a>
            <a href="#menu">Menú</a>
            <a href="#gallery">Galería</a>
            <a href="#contact">Contacto</a>
          </div>
        </nav>
      </header>
    );
  }