import styled from "styled-components";

export const Container = styled.div`
  background-color: #78787817;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "balanceGroup graphicGroup";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
`;

export const Header = styled.div`
  grid-area: header;
  margin: 2rem 1rem;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    > span {
      font-weight: bold;
      font-size: 0.8rem;
      &:after {
        content: "";
        background-color: var(--main-color-green);
        width: 2px;
        height: 0.8rem;
        display: inline-block;
        vertical-align: middle;
        margin: 0 1.4rem;
      }
    }
    > h2 {
      font-size: 0.8rem;

      > span {
        color: var(--main-color-green);
        margin: 0 0.1rem;
      }
    }

    > p {
      margin-left: 2rem;
      font-size: 0.8rem;

      > span {
        font-weight: bold;
        font-size: 0.8rem;
      }
    }
  }
`;

export const BalanceGroup = styled.div`
  grid-area: balanceGroup;
`;

export const Balance = styled.div`
  background-color: var(--main-color-white);
  padding: 2rem;
  margin: 0 5rem 2rem 5rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  > div > p {
    font-size: 0.8rem;
  }

  > span {
    font-size: 0.8rem;
  }

  > h2 {
    font-size: 2rem;
    margin: 1rem 0;
    font-weight: 900;
  }
`;

export const RecentTransactions = styled.div`
  border-radius: 0.2rem;
  margin: 0 5rem 2rem 5rem;
  padding: 2rem 1rem;

  > h3 {
    margin-bottom: 3rem;
  }
`;

export const GraphicGroup = styled.div`
  grid-area: graphicGroup;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
`;

export const Graphic = styled.div`
  margin: 0 1rem 2rem 1rem;
  padding: 0rem 1rem;
  background-color: var(--main-color-white);
  border-radius: 1rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;
