import { Button, Container, Input, Title } from "./styles";

import React from "react";
import { useState } from "react";

export const Navbar = () => {
  const [inputValue, setInputValue] = useState('');

    const handleChange = () => {
      setInputValue('');
    };

    return (
      <Container>
        <Title>Pokédex</Title>
        <Input
          value={inputValue}
          onChange={handleChange}
        />
        <Button>Buscar Pokemon</Button>
      </Container>
    );
  };