import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Contáctanos</h2>
        <form className="max-w-md mx-auto space-y-4">
          <Input type="text" placeholder="Nombre" />
          <Input type="email" placeholder="Email" />
          <Input type="tel" placeholder="Teléfono" />
          <Textarea placeholder="Mensaje" />
          <Button type="submit" className="w-full">Enviar mensaje</Button>
        </form>
      </div>
    </section>
  )
}
