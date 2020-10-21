import React, { useState, useEffect, useContext } from "react";
import { api } from "../../services/api";
import { UserContext } from "../../context/UserContext";
import { Container, Wrapper } from "./styles";
import TransactionsDetails from "../../components/TransactionsDetails";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const { userLogado } = useContext(UserContext);

  const id = userLogado.empresaId;

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
