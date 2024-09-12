import styled from "styled-components";
import Modal from "react-modal";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const openModalButton = styled.button`
  background-color: lightblue;
`;

export const modalContainer = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 500px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
`;
