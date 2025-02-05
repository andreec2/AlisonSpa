import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Link } from "react-router-dom"

const services = [
  {
    title: "Morpheus8 ",
    description: "Rejuvenecimiento Facial y Corporal.",
    link: "/services/morpheus8",
  },

  {
    title: "Limpieza Facial Profunda ",
    description: "vacio",
    link: "/services/limpieza-facial-profunda",
  },

  {
    title: "Tratamiento para el acne ",
    description: "Vacio",
    link: "/services/tratamiento-para-acne",
  },

  {
    title: "Depilacion cera",
    description: "Vacio",
    link: "/services/depilacio-cera",
  },

  {
    title: "Depilacion y pigmentación de cejas",
    description: "Vacio",
    link: "/services/pigmentación-de-cejas",  
  },

  {
    title: "Laminado de cejas",
    description: "Vacio",
    link: "/services/laminado-cejas",
  },

  {
    title: "Blanqueamiento de zonas oscuras",
    description: "Vacio",
    link: "/services/blanqueamiento-oscuras",
  },

  {
    title: "Maquillaje profesional",
    description: "Vacio",
    link: "/services/maquillaje-profesional",
  },

  {
    title: "Todo tipo de pestañas",
    description: "Vacio",
    link: "/services/pestañas-tipo",
  },

  {
    title: "Peinados",
    description: "Vacio",
    link: "/services/peinados",
  },
  
  {
    title: "Depilación Láser", 
    description: "Técnicas modernas para una piel suave y sin vello.",
    link: "/services/depilacion-laser", 
  },

];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  {service.link ? (
                    <Link to={service.link} className="text-pink-600 hover:text-pink-700">
                      {service.title}
                    </Link>
                  ) : (
                    service.title
                  )}
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}