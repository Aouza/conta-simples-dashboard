import React from "react";

import { Container } from "./styles";

const AccessForm = ({ children, onSubmit }) => {
  return <Container onSubmit={onSubmit}>{children}</Container>;
};

export default AccessForm;
