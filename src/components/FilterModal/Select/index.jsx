import React from "react";
import * as S from "./styles";

const Select = ({ name, value, onChange, options }) => {
  return (
    <S.Container>
      <S.Select name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </S.Select>
    </S.Container>
  );
};

export default Select;
