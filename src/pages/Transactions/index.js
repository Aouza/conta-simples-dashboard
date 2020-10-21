import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Container, Wrapper } from "./styles";
import TransactionsDetails from "../../components/TransactionsDetails";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const userId = localStorage.getItem("@conta-simples:userLogado");
  const id = JSON.parse(userId).empresaId;

  useEffect(() => {
    api.get("/transacoes").then((response) => {
      const data = response.data;

      setTransactions(
        data.filter((transaction) => transaction.empresaId === id)
      );
    });
  }, [id]);

  return (
    <Container>
      <Wrapper>
        <h1>Transações</h1>

        <TransactionsDetails data={transactions} />
      </Wrapper>
    </Container>
  );
}

export default Transactions;
