import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 66rem) {
    margin-top: 2rem;
  }

  @media (max-width: 36rem) {
    margin-top: 0;
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
  }
`;
