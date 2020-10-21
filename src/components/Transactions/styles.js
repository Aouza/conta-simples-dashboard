import styled from "styled-components";

export const Container = styled.ul`
  > a {
    margin-top: 3rem;
    padding: 1rem 0;
    color: var(--main-color-text-gray);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 2px;

    > svg {
      margin-left: 1rem;
    }
  }
`;
