import React from "react";
import "./Card.css";
import icon from "../../public/Icons.svg";

const Card = ({ ejercicios }) => {
  return (
    <div className="container-ejercicios">
      <img src={ejercicios.image} alt="" />
      <div className="info-ejercicios">
        <p>{ejercicios.tipo}</p>
        <p>{ejercicios.info}</p>
      </div>
      <img src={icon} alt="" />
    </div>
  );
};

export default Card;
