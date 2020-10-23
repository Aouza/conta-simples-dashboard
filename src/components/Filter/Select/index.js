import React from "react";

import { Container } from "./styles";

const Select = ({ children, value, onChange }) => {
  return (
    <Container value={value} onChange={onChange}>
      {children}
    </Container>
  );
};

export default Select;
