import { Header } from "../components/Header/Header";
import { Pokemons } from "../components/Pokemons/Pokemons";
import React from "react";

export const Home = () => {
  return (
    <div>
      <Header />
      <Pokemons />
    </div>
  );
};
