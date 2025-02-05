import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pink-600">
          Alison SPA
        </Link>
        <div className="space-x-4">
          <Link to="/#services" className="text-gray-600 hover:text-pink-600">
            Servicios
          </Link>
          <Link to="/#contact" className="text-gray-600 hover:text-pink-600">
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  )
}
