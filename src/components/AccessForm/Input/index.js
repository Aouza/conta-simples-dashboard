import React from "react";

import { Container, InputItem } from "./styles";

const Input = ({
  icon: Icon,
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
}) => {
  console.log();

  return (
    <Container>
      {Icon}
      <InputItem
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

export default Input;
