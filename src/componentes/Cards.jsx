import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import "./Cards.css";

const Cards = () => {
  const [ejercicios, setEjercicios] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://6674482c75872d0e0a95dafb.mockapi.io/ejercicios"
        );
        const datos = await response.json();
        console.log(datos);
        setEjercicios(datos);
      } catch (error) {
        console.error();
      }
    }
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="titulo-general">
        <p className="no-margin tt">Ejercicios</p>
        <p className="no-margin">4</p>
      </div>
      {ejercicios.map((ejercicios) => (
        <Card key={ejercicios.id} ejercicios={ejercicios} />
      ))}
    </div>
  );
};

export default Cards;
