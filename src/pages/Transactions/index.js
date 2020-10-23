import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Container, Wrapper } from "./styles";
import TransactionsDetails from "../../components/TransactionsDetails";
import Filter from "../../components/Filter";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [transactionsDataFiltered, setTransactionsDataFiltered] = useState();

  const userId = localStorage.getItem("@conta-simples:userLogado");
  const id = JSON.parse(userId).empresaId;

  useEffect(() => {
    api.get("/transacoes").then((response) => {
      const reverseTransactions = response.data;
      const data = reverseTransactions.reverse();

      setTransactions(
        data.filter((transaction) => transaction.empresaId === id)
      );
    });
  }, [id]);

  console.log(transactionsDataFiltered);

  return (
    <Container>
      <Wrapper>
        <h1>Transações</h1>

        <Filter
          data={transactions}
          setTransactions={setTransactionsDataFiltered}
        />
        {transactionsDataFiltered ? (
          <TransactionsDetails data={transactionsDataFiltered} />
        ) : (
          <TransactionsDetails data={transactions} />
        )}
      </Wrapper>
    </Container>
  );
}

export default Transactions;
