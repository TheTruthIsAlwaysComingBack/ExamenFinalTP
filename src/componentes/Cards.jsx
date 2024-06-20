import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";

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
    <div>
      {ejercicios.map((ejercicios) => (
        <Card key={ejercicios.id} ejercicios={ejercicios} />
      ))}
    </div>
  );
};

export default Cards;
