import styled from "styled-components";

export const Container = styled.div`
  background-color: #78787817;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 4rem 0;

  > div > h1 {
    font-weight: 900;
    font-size: 1.6rem;
  }

  @media (max-width: 92rem) {
    max-width: 50rem;
  }

  @media (max-width: 66rem) {
    max-width: 30rem;
  }

  @media (max-width: 36rem) {
    > div:first-child {
      display: flex;
      justify-content: space-between;
    }
  }
`;
