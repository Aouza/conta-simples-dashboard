import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--main-color-opacity-white);
  display: flex;
  align-items: center;
  border-radius: 0.2rem;
  border-bottom: 2px solid transparent;

  &:focus-within {
    border-color: var(--main-color-black);
  }

  > svg {
    font-size: 1.2rem;
    color: var(--main-color-light-gray);
    margin-left: 1rem;
  }

  & + div {
    margin-top: 1rem;
  }
`;

export const InputItem = styled.input`
  padding: 1rem;
  flex: 1;
  color: var(--main-color-dark-gray);
  font-weight: bold;
  font-size: 0.8rem;

  &::placeholder {
    color: var(--main-color-light-gray);
    font-weight: normal;
  }
`;
