import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    window.location.hash = "#services";
  }, []);

  return (
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-pink-600">
            Alison SPA
          </a>
          <div className="space-x-4">
            <a href="#services" className="text-gray-600 hover:text-pink-600">
              Servicios
            </a>
            <a href="#contact" className="text-gray-600 hover:text-pink-600">
              Contacto
            </a>
          </div>
        </nav>
      </header>
  );
}

