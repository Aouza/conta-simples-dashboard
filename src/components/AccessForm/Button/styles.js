import styled from "styled-components";

export const Container = styled.button`
  padding: 0.6rem 1.5rem;
  background-color: var(--main-color-green);
  color: var(--main-color-white);
  border-radius: 0.2rem;
  letter-spacing: 1.3px;
  box-shadow: 10px 10px 15px var(--light-box-shadow);
  transition: background-color 0.6s;
  text-transform: uppercase;
  font-size: 0.7rem;

  &:hover,
  &:focus {
    background-color: var(--main-color-hover-green);
  }
`;
