import { Link } from "react-router-dom";

export default function Header() {
  // Elimina el useEffect que cambiaba el hash

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-pink-600">
            Alison SPA
          </Link>
          <div className="space-x-4">
            <Link to="/" className="text-gray-600 hover:text-pink-600">
              Servicios
            </Link>
            <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-pink-600"
            >
              Contacto
            </button>
          </div>
        </nav>
      </header>
  );
}