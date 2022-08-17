import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  padding: 10px 0;
  overflow: auto;
  height: 480px;

  h4 {
    width: 70%;

    text-align: center;
    color: var(--gray-4);
    margin: auto;
    padding: 1rem;
  }
  @media (min-width: 850px) {
    margin-top: 15px;
    border-radius: 10px;
    height: 540px;

    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: var(--gray-4);
      width: 8px;
    }
    ::-webkit-scrollbar {
      width: 8px;
      background-color: var(--gray-3);
    }
  }
`;
