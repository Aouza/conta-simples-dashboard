import React from "react";
import TransactionDetail from "./TransactionDetail";
import { Container } from "./styles";

const TransactionsDetails = ({ data }) => {
  return (
    <Container>
      {data.map(
        (
          {
            dataTransacao,
            descricaoTransacao,
            estabelecimento,
            valor,
            credito,
          },
          i
        ) => (
          <TransactionDetail
            key={i}
            dateTime={dataTransacao}
            descricao={descricaoTransacao}
            estabelecimento={estabelecimento}
            valor={valor}
            credito={credito}
          />
        )
      )}
    </Container>
  );
};

export default TransactionsDetails;
