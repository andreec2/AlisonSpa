import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Link } from "react-router-dom"

const services = [
  {
    title: "Morpheus8 ",
    description: "Rejuvenecimiento Facial y Corporal.",
    link: "/services/morpheus",
  },

  {
    title: "Limpieza Facial Profunda ",
    description: "Elimina impurezas y revitaliza la piel.",
    link: "/services/limpieza-facial-profunda",
  },

  {
    title: "Eliminación de Verrugas", 
    description: "Remoción segura con cauterizador profesional.",
    link: "/services/eliminacion-de-verrugas", 
  },

  {
    title: "Tratamiento para el acne ",
    description: "Reduce brotes y mejora la textura de la piel.",
    link: "/services/tratamiento-para-acne",
  },

  {
    title: "Depilacion cera",
    description: "Remueve vello de forma efectiva y duradera.",
    link: "/services/depilacion-cera",
  },

  {
    title: "Depilacion y pigmentación de cejas",
    description: "Define y realza la forma de tus cejas.",
    link: "/services/pigmentación-de-cejas",  
  },

  //////////////////////////////////////
  {
    title: "Laser10Body ",
    description: "Eliminacion de vello no deseado.",
    link: "/services/laser10Body",
  },

  {
    title: "Emsculpt ",
    description: "tonifica los músculos y quema grasa simultáneamente.",
    link: "/services/emsculpt",
  },

  {
    title: "Masajes reductores ",
    description: "Moldea tu cuerpo y reduce medidas.",
    link: "/services/masajes-reductores",
  },

  {
    title: "Masajes relajantes ",
    description: "Relájate y alivia el estrés con un masaje terapéutico.",
    link: "/services/masajes-relajantes",
  },
  //////////////////////////////////////

  {
    title: "Laminado de cejas",
    description: "Efecto de cejas peinadas y con mayor volumen.",
    link: "/services/laminado-cejas",
  },

  {
    title: "Blanqueamiento de zonas oscuras",
    description: "Unifica el tono de la piel en áreas específicas.",
    link: "/services/blanqueamiento-oscuras",
  },

  {
    title: "Eliminación de Hongos en las Uñas",
    description: "Elimina infecciones y restaura la salud de tus uñas.",
    link: "/services/eliminacion-de-hongos",
  },

  {
    title: "Maquillaje profesional",
    description: "Looks impecables para cualquier ocasión.",
    link: "/services/maquillaje-profesional",
  },

  {
    title: "Todo tipo de pestañas",
    description: "Extensiones, lifting y más para resaltar tu mirada.",
    link: "/services/pestañas-tipo",
  },

  {
    title: "Peinados",
    description: "Estilos únicos para eventos y el día a día.",
    link: "/services/peinados",
  },
  
  {
    title: "Depilación Láser", 
    description: "Técnicas modernas para una piel suave y sin vello.",
    link: "/services/depilacion-laser", 
  },
  {
    title: "Keratina", 
    description: "Tratamiento avanzado para un cabello liso, fuerte y sin frizz.",
    link: "/services/keratina", 
  },
  {
    title: "Plasma Rico en Plaquetas", 
    description: "Regeneración celular para rejuvenecer la piel y fortalecer el cabello.",
    link: "/services/plasma-rico-en-plaquetas", 
  },

  {
    title: "Eliminación de Venas", 
    description: "Reduce venas varicosas y arañas vasculares.",
    link: "/services/eliminacion-de-venas", 
  },

];

export default function Services() {
  return (
    <section id="services" className="bg-[#fcdfdf] py-20">

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-black rounded-lg shadow-md bg-[#fcdfdf]">
              <CardHeader>
                <CardTitle>
                  {service.link ? (
                    <Link to={service.link} className="text-black hover:text-pink-700">
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