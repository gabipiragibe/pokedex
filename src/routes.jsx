import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:pokemonId" element={<Details />} />
      {/* permitindo que a rota details aceite um parametro, no caso o id do pokemon */}
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
