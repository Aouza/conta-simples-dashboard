import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 86rem) {
    margin-top: 2rem;
  }

  @media (max-width: 36rem) {
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
  }
`;
