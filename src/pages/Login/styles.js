import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: 72rem) {
    grid-template-columns: 1fr;
  }
`;

export const Header = styled.header`
  padding: 1rem;
  position: fixed;
  width: 100%;
  > img {
    width: 10rem;
  }
`;

export const ImageSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 2rem;

  > h2 {
    font-size: 1.5rem;
    max-width: 30rem;
    margin: 2rem;
    text-align: center;
    font-weight: 900;
  }

  > p {
    max-width: 40rem;
    text-align: center;
    color: var(--main-color-light-gray);
    font-size: 0.9rem;
  }

  > img {
    width: 60%;
  }

  @media (max-width: 72rem) {
    display: none;
  }
`;

export const LoginSide = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--main-color-light-green);

  header {
    margin-bottom: 2rem;
    > h2 {
      font-weight: 800;
      font-size: 2rem;
      > span {
        padding: 0.4rem;
        background: var(--main-color-black);
        margin: 0.4rem 0;
        display: inline-block;
        border-radius: 0.2rem;
        font-size: 1.8rem;
        color: var(--main-color-white);
      }
    }
  }

  @media (max-width: 72rem) {
    background-color: var(--main-color-white);
  }
`;

export const AcessItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    color: var(--main-color-green);
    font-size: 0.8rem;
    transition: color 0.6s;

    &:hover,
    &:focus {
      color: var(--main-color-hover-green);
    }
  }
`;

export const LinkToSignUp = styled.p`
  text-align: center;
  color: var(--main-color-dark-gray);
  margin-top: 4rem;
  font-size: 0.8rem;

  > a {
    color: var(--main-color-green);
    transition: color 0.6s;

    &:hover,
    &:focus {
      color: var(--main-color-hover-green);
    }
  }
`;
