import React, { useState } from "react";
import { convertMoney } from "../../../tools/convertMoney";

import {
  Container,
  ValueTransaction,
  Wrapper,
  Establishment,
  Details,
} from "./styles";

const Transaction = ({ transaction, icon, signal, credit }) => {
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <Container>
      <Wrapper credit={credit} onClick={() => setOpenDetails(!openDetails)}>
        <Establishment>
          {icon}
          <div>
            {transaction.descricaoTransacao}
            <br></br>
            <span>{transaction.estabelecimento}</span>
          </div>
        </Establishment>
        <ValueTransaction credit={credit}>
          {signal} {convertMoney(transaction.valor)}
        </ValueTransaction>
      </Wrapper>
      <Details openDetails={openDetails}>
        {new Date(transaction?.dataTransacao)?.toLocaleString("pt-br")}
      </Details>
    </Container>
  );
};

export default Transaction;
