import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;

  .btnSearch {
    border-radius: 4px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-4);
    font-size: 20px;
    :hover {
      background: var(--gray-4);
      color: var(--gray-1);
    }
  }
`;
