import styled from "styled-components";

export const Container = styled.div`
  background-color: #78787817;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  width: 90%;
  display: grid;
  grid-template-areas:
    "header header"
    "balanceGroup graphicGroup";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;

  @media (max-width: 72rem) {
    max-width: 50rem;
    grid-template-areas:
      "header"
      "balanceGroup"
      "graphicGroup";
    grid-template-columns: 1fr;
  }

  @media (max-width: 50rem) {
    max-width: 50rem;
    grid-template-areas:
      "header"
      "balanceGroup"
      "graphicGroup";
    grid-template-columns: 1fr;
  }
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
    flex-wrap: wrap;
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

  @media (max-width: 72rem) {
    flex-direction: column;
    align-items: initial;

    div {
      margin-bottom: 1rem;

      > p {
        margin-left: 0rem;
        margin-right: 2rem;
      }
    }
  }

  @media (max-width: 50rem) {
    div {
      > span {
        margin-bottom: 0.4rem;

        > p {
          margin-bottom: 0.1rem;
        }
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
  margin: 0 1rem 2rem 1rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;

    > p {
      font-size: 0.8rem;
      display: flex;
      align-items: center;

      > svg {
        padding: 0.5rem;
        box-sizing: initial;
        background-color: var(--light-box-shadow);
        margin-right: 1rem;
        border-radius: 0.3rem;
      }
    }
  }

  > span {
    font-size: 0.8rem;
  }

  > h2 {
    font-size: 2rem;
    margin: 1rem 0;
    font-weight: 900;
  }

  @media (max-width: 40rem) {
    > div {
      > p {
        margin-bottom: 2rem;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        font-size: 0.7rem;

        > svg {
          margin-bottom: 1rem;
        }
      }
    }

    > h2 {
      font-size: 1.6rem;
    }
  }
`;

export const RecentTransactions = styled.div`
  border-radius: 0.2rem;
  margin-bottom: 2rem;
  padding: 2rem 1rem;

  > h3 {
    margin-bottom: 3rem;
    font-size: 1rem;
    color: var(--main-color-dark-gray);
  }
`;

export const GraphicGroup = styled.div`
  grid-area: graphicGroup;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;

export const Graphic = styled.div`
  margin: 0 1rem 2rem 1rem;
  padding: 0rem 1rem;
  background-color: var(--main-color-white);
  border-radius: 1rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  > div {
    touch-action: manipulation !important;
  }
`;
