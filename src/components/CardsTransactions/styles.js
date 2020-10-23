import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 2rem;

  @media (max-width: 92rem) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 66rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 50rem) {
    grid-template-columns: 1fr;
  }
`;
