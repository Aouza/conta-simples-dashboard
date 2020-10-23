import styled from "styled-components";

export const Container = styled.select`
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  @media (max-width: 36rem) {
    margin-right: 0;
    margin-bottom: 1rem;
    padding: 0.5rem 0rem;
  }
`;
