import styled from "styled-components";

export const Container = styled.header`
  background: var(--gray-2);
  height: 70px;

  .containerHeader {
    width: 90%;
    height: 70px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      height: 50px;
    }
    .logoutBtn {
      background-color: var(--gray-4);
      height: 35px;
      border-radius: 5px;
      color: #fff;
      font-weight: 600;
      padding: 0 1rem;
      font-size: 13px;

      &:hover {
        background-color: var(--gray-3);
      }
    }
  }
`;
