import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  background-color: var(--main-color-white);
  display: grid;
  grid-template-columns: 0.3fr 1fr 1fr 1fr 1fr;
  border-radius: 0.3rem;
  margin-top: 2rem;
  position: relative;
  font-size: 0.9rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Status = styled.div`
  background: var(--main-color-green);
  width: 10px;
  height: 10px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px #45b34a38;

  ${({ credito }) =>
    !credito &&
    css`
      background: tomato;
      box-shadow: 5px 5px 5px #ff634726;
    `}
`;

export const Date = styled.div`
  color: var(--main-color-text-gray);
`;

export const Descricao = styled.div``;

export const Estabelecimento = styled.div`
  font-size: 0.7rem;
  color: var(--main-color-text-gray);
`;

export const Valor = styled.div`
  font-weight: 500;
  color: var(--main-color-green);

  ${({ credito }) =>
    !credito &&
    css`
      color: tomato;
    `}
`;
