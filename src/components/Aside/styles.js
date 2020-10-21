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
      border-radius: 1rem;
      background: #000;
      color: #fff;
      font-size: 0.8rem;

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
`;
