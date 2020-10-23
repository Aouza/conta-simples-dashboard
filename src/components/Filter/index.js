import React, { useState } from "react";
import Select from "./Select";
import Button from "../AccessForm/Button";

import { Container } from "./styles";

const Filter = ({ data, setTransactions }) => {
  const [selectTypeValue, setSelectTypeValue] = useState("");
  const [selectCreditValue, setSelectCreditValue] = useState("");

  const handleFilterTransactions = () => {
    if (!!selectTypeValue && !!selectCreditValue) {
      const filteredTypeTransactions = data.filter(
        (transaction) => transaction.tipoTransacao === selectTypeValue
      );

      const filteredCreditTransactions = filteredTypeTransactions.filter(
        (transaction) => transaction.credito === (selectCreditValue === "true")
      );

      setTransactions(filteredCreditTransactions);

      return;
    } else if (!!selectTypeValue) {
      const filteredTypeTransactions = data.filter(
        (transaction) => transaction.tipoTransacao === selectTypeValue
      );

      setTransactions(filteredTypeTransactions);
      return;
    } else if (!!selectCreditValue) {
      const filteredCreditTransactions = data.filter(
        (transaction) => transaction.credito === (selectCreditValue === "true")
      );

      console.log(filteredCreditTransactions);

      setTransactions(filteredCreditTransactions);
      return;
    } else {
      setTransactions(data);
    }
  };

  const handleTypeValue = ({ target }) => {
    setSelectTypeValue(target.value);
  };

  const handleCreditValue = ({ target }) => {
    setSelectCreditValue(target.value);
  };

  return (
    <Container>
      <Select value={selectTypeValue} onChange={handleTypeValue}>
        <option value="">Nenhum</option>
        <option value="TED_IN">Transferência</option>
        <option value="SLIP_IN">Pagamentos</option>
        <option value="CARD">Cartões</option>
      </Select>
      <Select value={selectCreditValue} onChange={handleCreditValue}>
        <option value="">Nenhum</option>
        <option value={true}>Entrada</option>
        <option value={false}>Saída</option>
      </Select>

      <Button
        type="button"
        value="Filtrar"
        onClick={handleFilterTransactions}
      />
    </Container>
  );
};

export default Filter;
