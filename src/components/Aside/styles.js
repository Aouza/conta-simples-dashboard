import styled from "styled-components";

export const Container = styled.header``;

export const Wrapper = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin-top: 1rem;
    > img {
      width: 8rem;
    }
  }

  @media (max-width: 50rem) {
    padding: 1rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Navigation = styled.ul`
  margin-top: 2rem;

  > li {
    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.6rem 0.6rem;
      margin-top: 1rem;
      border-radius: 0.3rem;
      background: #000;
      color: #fff;
      font-size: 0.8rem;
      box-shadow: 2px 2px 5px var(--light-box-shadow);

      > svg {
        margin-right: 1rem;
        background: #fff;
        color: #000;
        border-radius: 0.5rem;
        padding: 0.5rem;
        box-sizing: initial;
      }
    }
  }

  @media (max-width: 50rem) {
    margin-top: 0;
    display: flex;
    align-items: center;

    > li {
      > a {
        background: var(--main-color-white);
        color: var(--main-color-black);
        box-shadow: none;

        > span {
          display: none;
        }

        > svg {
          font-size: 1.4rem;
          margin: 0;
        }
      }
    }
  }
`;
