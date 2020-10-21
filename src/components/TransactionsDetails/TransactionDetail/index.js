import React from "react";
import { convertMoney } from "../../../tools/convertMoney";

import {
  Container,
  Date,
  Descricao,
  Estabelecimento,
  Valor,
  Status,
} from "./styles";

const TransactionDetail = ({
  dateTime,
  descricao,
  estabelecimento,
  valor,
  credito,
}) => {
  return (
    <Container>
      <Status credito={credito}></Status>
      <Date> {new window.Date(dateTime)?.toLocaleString("pt-br")}</Date>
      <Descricao>{descricao}</Descricao>
      <Estabelecimento>{estabelecimento}</Estabelecimento>
      <Valor credito={credito}>{convertMoney(valor)}</Valor>
    </Container>
  );
};

export default TransactionDetail;
