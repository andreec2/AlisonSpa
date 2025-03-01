
import "../Styles/base.css";

export default function DepilacionPigmentacion() {

    const DepilacionPigmentacionI = import.meta.env.BASE_URL + "images/PigmentacionCejas.jpg";


    return (
        <div className="container">
            <h1 className="title">Depilación Láser y Tratamiento de Pigmentación</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src={DepilacionPigmentacionI} alt="Depilación Láser y Tratamiento de Pigmentación" className="image" />
                </div>

                {/* Descripción */}
                <p className="description">
                    La depilación láser es una técnica avanzada que elimina el vello no deseado de forma duradera.
                    Además, el tratamiento para la pigmentación ayuda a reducir manchas oscuras y mejorar el tono de la piel,
                    logrando una apariencia uniforme y saludable.
                </p>

                {/* Video informativo */}
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/9Uqxxrx36wA" title="Depilación Láser y Pigmentación"></iframe>
                </div>

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Elimina el vello no deseado de manera duradera.</li>
                    <li>Reduce la hiperpigmentación en zonas afectadas.</li>
                    <li>Mejora la textura y el tono de la piel.</li>
                    <li>Evita la irritación causada por otros métodos de depilación.</li>
                </ul>

                {/* Áreas de aplicación */}
                <h2 className="subtitle">Áreas de Aplicación:</h2>
                <ul className="list">
                    <li>Axilas</li>
                    <li>Zonas íntimas</li>
                    <li>Rostro (bigote, mentón, mejillas)</li>
                    <li>Piernas y brazos</li>
                </ul>

                {/* Duración y precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    Cada sesión dura entre 20 y 60 minutos, dependiendo del área a tratar.
                    Se recomienda un tratamiento de 6 a 8 sesiones para obtener mejores resultados.
                    Los precios varían entre $30 y $120 por sesión.
                </p>
            </div>
        </div>
    );
}
