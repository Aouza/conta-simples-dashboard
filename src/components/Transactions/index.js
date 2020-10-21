import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiMinus, BiPlus } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { UserContext } from "../../context/UserContext";

import { Container } from "./styles";
import Transaction from "./Transaction";

const Transactions = ({ data }) => {
  const { userLogado } = useContext(UserContext);

  const id = userLogado.empresaId;

  return (
    <Container>
      {data
        .filter((empresa) => empresa.empresaId === id)
        .slice(0, 4)
        .map((transaction, i) =>
          transaction?.credito ? (
            <Transaction
              key={i}
              credit={true}
              icon={<BiPlus size={14} style={{ fill: "green" }} />}
              transaction={transaction}
              signal="+"
            />
          ) : (
            <Transaction
              key={i}
              credit={false}
              icon={<BiMinus size={14} style={{ fill: "red" }} />}
              transaction={transaction}
              signal="-"
            />
          )
        )}

      <Link to="/transacoes">
        veja mais transações <HiOutlineArrowNarrowRight size={14} />
      </Link>
    </Container>
  );
};

export default Transactions;
