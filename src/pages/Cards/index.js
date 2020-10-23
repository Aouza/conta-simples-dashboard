import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Container, Wrapper } from "./styles";
import CardsTransactions from "../../components/CardsTransactions";
import Loading from "../../components/Loading";

function Cards() {
  const [cardsTransactions, setCardsTransactions] = useState({});
  const [loading, setLoading] = useState(false);

  const userId = localStorage.getItem("@conta-simples:userLogado");
  const id = JSON.parse(userId).empresaId;

  useEffect(() => {
    setLoading(true);
    api.get("/transacoes").then((response) => {
      const data = response.data;

      const cardsGroup = data
        .filter((transaction) => transaction.empresaId === id)
        .filter((card) => card.tipoTransacao === "CARD")
        .reduce(function (acc, item) {
          let key = item["finalCartao"];

          (acc[key] ? acc[key] : (acc[key] = null || [])).push(item);

          return acc;
        }, {});

      setCardsTransactions(cardsGroup);
      setLoading(false);
    });
  }, [id]);

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Wrapper>
        <h1>Cartões</h1>

        <CardsTransactions data={cardsTransactions} />
      </Wrapper>
    </Container>
  );
}

export default Cards;
