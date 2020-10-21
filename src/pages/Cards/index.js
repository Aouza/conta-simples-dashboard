import React, { useState, useEffect, useContext } from "react";
import { api } from "../../services/api";
import { UserContext } from "../../context/UserContext";
import { Container, Wrapper } from "./styles";
import CardsTransactions from "../../components/CardsTransactions";

function Cards() {
  const [cardsTransactions, setCardsTransactions] = useState({});

  const { userLogado } = useContext(UserContext);

  const id = userLogado.empresaId;

  useEffect(() => {
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
    });
  }, [id]);

  return (
    <Container>
      <Wrapper>
        <h1>Cartões</h1>

        <CardsTransactions data={cardsTransactions} />
      </Wrapper>
    </Container>
  );
}

export default Cards;
