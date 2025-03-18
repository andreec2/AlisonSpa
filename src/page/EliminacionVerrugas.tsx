import "../Styles/base.css";
import WhatsAppButton from "./WhatsAppButton";

export default function EliminacionVerrugas() {
    const EliminacionVerrugasI = import.meta.env.BASE_URL + "/images/EliminacionVerrugas.jpg";

    return (
        <div className="container">
            <h1 className="title">Eliminación de Verrugas</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src={EliminacionVerrugasI} alt="Eliminación de Verrugas" className="image" />
                </div>

                {/* Descripción */}
                <p className="description">
                    La eliminación de verrugas con cauterizador profesional es un procedimiento seguro y efectivo para 
                    remover verrugas sin dolor ni cicatrices, dejando la piel limpia y uniforme.
                </p>

                {/* Video informativo */}
                <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/IFAVW1hkWfc?si=w5CaCU3Faq0n_Kag" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Elimina verrugas de forma rápida y segura.</li>
                    <li>Minimiza el riesgo de cicatrices.</li>
                    <li>Previene la reaparición en la zona tratada.</li>
                </ul>

                {/* Áreas de aplicación */}
                <h2 className="subtitle">Áreas de Aplicación:</h2>
                <ul className="list">
                    <li>Rostro</li>
                    <li>Cuello</li>
                    <li>Manos</li>
                    <li>Pies</li>
                    <li>Otras zonas del cuerpo</li>
                </ul>

                {/* Duración y precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    La sesión dura aproximadamente 30 a 60 minutos. 
                    Los precios varían entre $100 y $200, según la cantidad y tamaño de las verrugas a tratar.
                </p>

                {/* Botón de Reserva */}
                <WhatsAppButton message="Hola, me interesa el tratamiento de Eliminación de Verrugas." />
            </div>
        </div>
    );
}
