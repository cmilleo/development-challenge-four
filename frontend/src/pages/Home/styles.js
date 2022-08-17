import styled from "styled-components";

export const Container = styled.div`
  .container {
    @media (min-width: 850px) {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: center;
      width: 90%;
      margin: 0 auto;
      margin-top: 20px;
      main {
        width: 100%;
        max-width: 700px;
      }
    }
  }
`;
