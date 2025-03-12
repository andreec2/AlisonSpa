import { Link } from "react-router-dom";



export default function Header() {
  // Elimina el useEffect que cambiaba el hash

  const logoImagen = import.meta.env.BASE_URL + "/images/NEGRO.png";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
  <header className="bg-white shadow-sm">
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-pink-600">
        <img src={logoImagen} alt="Logotipo del spa" className="w-20 h-auto" />
      </Link>
      <div className="space-x-4">
        <Link to="/" className="text-black hover:text-pink-400">
          Servicios
        </Link>
        <button
          onClick={() => scrollToSection('contact')}
          className="text-white hover:text-pink-400"
        >
          Contacto
        </button>
      </div>
    </nav>
  </header>
);
}