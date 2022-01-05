import React from "react";
import "./Card.css";
export default function Card({ name, population, nativeName, region, flag, hidden }) {
  return (
    <div className="card-style">
      <h3>{name}</h3>
      <h5 hidden={hidden}>Nombre nativo: {nativeName ? nativeName : 'No especificado'}</h5>
      <img src={flag? flag : "https://tumottor.com/wp-content/uploads/2018/04/default-image.png"} alt="char-img" hidden={hidden} id="image" />
      <h5 hidden={hidden}>Region: {region ? region : 'No especificado'}</h5>
      <h5 hidden={hidden}>Poblacion: {population ? population : 'No especificado'}</h5>
    </div>
  );
}

