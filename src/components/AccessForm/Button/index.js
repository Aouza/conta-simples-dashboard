import React from "react";

import { Container } from "./styles";

const Button = ({ type, value, ...props }) => {
  return (
    <Container type={type} {...props}>
      {value}
    </Container>
  );
};

export default Button;
