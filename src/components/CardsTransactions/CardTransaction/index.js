import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { convertMoney } from "../../../tools/convertMoney";

import { Container, CardName, CardNumber, Total } from "./styles";

const CardTransaction = ({ card }) => {
  const [totalValue, setTotalValue] = useState("");

  const { userLogado } = useContext(UserContext);

  useEffect(() => {
    const total = card[1].reduce((acc, item) => acc + item.valor, 0);

    setTotalValue(total);
  }, [card, setTotalValue]);

  return (
    <Container>
      <CardName>{userLogado.nomeEmpresa}</CardName>
      <CardNumber>**** **** **** {card[0]}</CardNumber>
      <Total>
        <span>Total Gasto</span>
        <span>{convertMoney(totalValue)}</span>
      </Total>
    </Container>
  );
};

export default CardTransaction;
