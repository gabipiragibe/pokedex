import styled from "styled-components";
import Modal from "react-modal";

export const Container = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const OpenModalButton = styled.button`
  border-radius: 10px;
  padding: 10px 20px;
  border: none;
  background-color: lightblue;
`;

export const ModalContainer = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  max-height: 80%;
  max-width: 50%;
  overflow-y: auto;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: space-around;
`;
export const FilterButton = styled.button`
  border-radius: 10px;
`;
