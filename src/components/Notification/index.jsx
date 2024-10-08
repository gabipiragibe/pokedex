import React from "react";

const colorMapping = {
  success: "#048337",
  error: "#fb2c56",
};

//objeto colorMapping que mapeia as cores
export const Notification = ({ message, type }) => {
  const statusColors = colorMapping[type] || "#000000";

  //variável statusColors é definida com base no type fornecido
  //Se o type não for igual a nenhuma das chaves no objeto statusColors, a cor default é utilizada.

  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ color: statusColors }}>{message}</p>
    </div>
    //A cor do texto é definida pela variável statusColors
  );
};

export default Notification;
