import React from "react";
import "../Styles/DepilacionLaser.css";
import LaserImage from "../images/DepilacionLaser.jpg";

export default function DepilacionLaser() {
  return (
    <div className="container">
      <h1 className="title">Depilación Láser - Piel Suave y Sin Vello</h1>

      <div className="content-box">
        {/* Imagen */}
        <div className="image-container">
          <img src={LaserImage} alt="Depilación Láser" className="image" />
        </div>

        {/* Descripción */}
        <p className="description">
          La depilación láser es un procedimiento estético avanzado que elimina 
          el vello de forma efectiva y duradera. Utilizando tecnología de luz 
          concentrada, destruye el folículo piloso sin dañar la piel, 
          proporcionando resultados visibles desde las primeras sesiones.
        </p>

        {/* Video informativo */}
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Cn6KogPAYPI?si=VFTeygt0GlGgGXgU" title="YouTube video player" ></iframe>
        </div>

        {/* Beneficios */}
        <h2 className="subtitle">Beneficios:</h2>
        <ul className="list">
          <li>Elimina el vello de forma progresiva y permanente.</li>
          <li>Reduce la irritación y los vellos encarnados.</li>
          <li>Es un tratamiento seguro para todo tipo de piel.</li>
          <li>Sesiones rápidas y sin tiempo de recuperación.</li>
        </ul>

        {/* Áreas de aplicación */}
        <h2 className="subtitle">Áreas de Aplicación:</h2>
        <ul className="list">
          <li>Rostro y cuello</li>
          <li>Axilas y brazos</li>
          <li>Piernas y zona íntima</li>
          <li>Espalda y pecho</li>
        </ul>

        {/* Duración y precio */}
        <h2 className="subtitle">Duración y Precio:</h2>
        <p className="description">
          Las sesiones duran entre **15 a 60 minutos**, dependiendo de la zona a tratar.  
          El precio varía según la cantidad de sesiones recomendadas.
        </p>
      </div>
    </div>
  );
}
