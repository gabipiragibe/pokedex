import { Navbar } from "../components/Navbar/Navbar";
import { Pokemons } from "../components/Pokemons/Pokemons";
import React from "react";

export const Home = () => {

  return (
    <div>
      <Navbar/>
      <Pokemons/>
    </div>
  );
};
