import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  background-color: var(--main-color-white);
  border-radius: 0.3rem;
  position: relative;
  font-size: 0.9rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1), 0px -4px 0px #2b2b2b;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 50rem) {
    margin-top: 2rem;
    margin-right: 0rem;
  }
`;

export const CardName = styled.h3`
  margin-bottom: 0.5rem;
  color: var(--main-color-dark-gray);
`;

export const CardNumber = styled.h4`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  > span:first-child {
    color: var(--main-color-text-gray);
    font-weight: 500;
  }

  > span:last-child {
    font-weight: 900;
    color: var(--main-border-color-green);
  }
`;
