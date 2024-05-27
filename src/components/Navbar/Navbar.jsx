import { Container, Input, Title } from "./styles";

import React from "react";
import { useState } from "react";

export const Navbar = () => {
  const [inputValue, setInputValue] = useState('');

    const handleChange = () => {
      setInputValue();
    };

    return (
      <Container>
        <Title>Pokédex</Title>
        <Input
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </Container>
    );
  };