import React from "react";
import "./Card.css";
import icon from "../../public/Icons.svg";

const Card = ({ ejercicios }) => {
  return (
    <div className="container-ejercicios">
      <div className="ejercicios-derecha">
        <img className="imagen-ejercicio" src={ejercicios.image} alt="" />
        <div className="info-ejercicios">
          <p className="titulo">{ejercicios.tipo}</p>
          <p>{ejercicios.info}</p>
        </div>
      </div>
      <img src={icon} alt="" />
    </div>
  );
};

export default Card;
