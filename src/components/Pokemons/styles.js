import { styled } from "styled-components";

export const Container = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  margin: 20px;
  display: flex;
  width: 300px;
  font-family: "Courier New", Courier, monospace;
  font-size: medium;
  align-items: center;
  flex-direction: column;
  border: 2px solid lightgray;
  background-color: #add8e654;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const PerfilImage = styled.img`
  width: 100px;
`;
