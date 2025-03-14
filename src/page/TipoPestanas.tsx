
import "../Styles/base.css";
import WhatsAppButton from "./WhatsAppButton";

export default function TipoPestanas() {
    const TipoPestanasI = import.meta.env.BASE_URL + "/images/TodoPestañas.jpg";
    return (
        <div className="container">
            <h1 className="title">Extensión y Lifting de Pestañas</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src={TipoPestanasI} alt="Extensión y Lifting de Pestañas" className="image" />
                </div>

                {/* Descripción */}
                <p className="description">
                    Las extensiones y el lifting de pestañas realzan la mirada sin necesidad de maquillaje.
                    Se utilizan técnicas especializadas para lograr un efecto natural o voluminoso, según
                    la preferencia del cliente.
                </p>

                {/* Video informativo */}
                <div className="video-container">
                    <iframe width="560" height="315"
                            src="https://www.youtube-nocookie.com/embed/zxPuIzmh50U?si=YrXhtoOR3yEmkKau&amp;controls=0"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Resalta la mirada de forma natural.</li>
                    <li>Ahorra tiempo en la rutina de maquillaje.</li>
                    <li>Opciones personalizadas en longitud y volumen.</li>
                    <li>Duración prolongada sin necesidad de retoques constantes.</li>
                </ul>

                {/* Áreas de aplicación */}
                <h2 className="subtitle">Áreas de Aplicación:</h2>
                <ul className="list">
                    <li>Extensiones de pestañas clásicas.</li>
                    <li>Extensiones de volumen y mega volumen.</li>
                    <li>Lifting y tinte de pestañas.</li>
                    <li>Tratamientos de fortalecimiento.</li>
                </ul>

                {/* Duración y precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    La aplicación dura entre 1 y 2 horas, dependiendo del tipo de pestañas elegidas.
                    Los precios van desde $50 hasta $150, según el tratamiento y el volumen deseado.
                </p>

                {/* Botón de Reserva */}
                <WhatsAppButton message="Buenas tardes, me interesan el tratamiento de Extensión y Lifting de Pestañas." />
            </div>
        </div>
    );
}
