import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999999;
  background: var(--main-color-white);

  > p {
    margin-top: 2rem;
    color: var(--main-color-light-green);
    font-weight: 900;
  }

  > svg {
    width: 3rem;
    color: var(--main-color-green);
  }
`;
