import styled, { css } from "styled-components";

export const Container = styled.li``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0.2rem;
  font-weight: bold;
  font-size: 0.8rem;
  background: #fff;
  margin-bottom: 0.3rem;
  border-radius: 0.3rem;
  border-left: 3px solid var(--main-color-green);
  cursor: pointer;
  position: relative;

  ${({ credit }) =>
    !credit &&
    css`
      border-left: 3px solid tomato;
    `}
`;

export const ValueTransaction = styled.div`
  display: flex;
  align-items: center;
  color: var(--main-color-green);

  ${({ credit }) =>
    !credit &&
    css`
      color: tomato;
    `}

  @media (max-width: 40rem) {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`;

export const Establishment = styled.div`
  display: flex;
  align-items: center;
  color: var(--main-color-dark-gray);

  > svg {
    padding: 1rem;
    background-color: #f4f4f4;
    border-radius: 1rem;
    box-sizing: initial;
    margin-right: 1rem;
  }

  > div > span {
    font-size: 0.7rem;
    color: var(--main-color-light-gray);
    font-weight: normal;
    margin-top: 0.4rem;
    display: block;
  }
`;

export const Details = styled.div`
  height: 0;
  font-size: 0.8rem;
  color: var(--main-color-light-gray);
  transition: all 0.6s;
  overflow: hidden;

  ${({ openDetails }) =>
    openDetails &&
    css`
      padding: 1rem 1rem 2rem 1rem;
      transition: all 0.6s;
    `}
`;
