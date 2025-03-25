import "../Styles/base.css";
import WhatsAppButton from "./WhatsAppButton";

export default function MasajesReductores() {
    const masajesImage = import.meta.env.BASE_URL + "/images/masajes-reductores.jpg";

    return (
        <div className="container">
            <h1 className="title">Masajes Reductores</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src={masajesImage} alt="Masajes Reductores" className="image" />
                </div>

                {/* Descripción */}
                <p className="description">
                    Los masajes reductores con aparatología y maderoterapia ayudan a moldear el cuerpo, 
                    reducir medidas y eliminar toxinas de manera efectiva. Este tratamiento combina 
                    técnicas manuales con el uso de herramientas especializadas para mejorar la circulación 
                    y la eliminación de grasa localizada.
                </p>

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Reduce medidas y mejora la apariencia de la piel.</li>
                    <li>Estimula la circulación y el drenaje linfático.</li>
                    <li>Ayuda a eliminar toxinas y líquidos retenidos.</li>
                    <li>Favorece la tonificación muscular.</li>
                </ul>

                {/* Aplicación */}
                <h2 className="subtitle">¿Para quién es recomendado?</h2>
                <ul className="list">
                    <li>Personas que desean reducir medidas sin cirugía.</li>
                    <li>Quienes buscan mejorar la firmeza de la piel.</li>
                    <li>Ideal para complementar un plan de alimentación saludable y ejercicio.</li>
                </ul>

                {/* Duración y precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    Cada sesión dura aproximadamente 45 minutos.  

                    <strong> Precios:</strong>  
                    - 1 sesión: $85 
                    - 10 sesiones: $700  
                </p>

                {/* Botón de Reserva */}
                <WhatsAppButton message="Hola, estoy interesado en los masajes reductores." />
            </div>
        </div>
    );
}
