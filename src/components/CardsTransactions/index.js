import React from "react";
import CardTransaction from "./CardTransaction";
import { Container } from "./styles";

const CardsTransactions = ({ data }) => {
  return (
    <Container>
      {Object.entries(data).map((item) => (
        <CardTransaction key={item[0]} card={item} />
      ))}
    </Container>
  );
};

export default CardsTransactions;
