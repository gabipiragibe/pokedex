import React from "react";

export const Error = ({ message }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ color: "#fb2c56" }}>{message}</p>
    </div>
  );
};

export default Error;

//componente Notification, recebe props message e type
