import React from "react";

import { Container } from "./styles";

const Button = ({ type, value }) => {
  return <Container type={type}>{value}</Container>;
};

export default Button;
