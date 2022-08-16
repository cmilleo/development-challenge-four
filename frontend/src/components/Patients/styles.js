import styled from "styled-components";

export const Container = styled.li`
  width: 95%;
  padding: 5px;
  margin: 0 auto;
  background: var(--gray-2);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;

  h3,
  h5,
  p {
    width: 100%;
    word-wrap: break-word;
  }
  .containerButtons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--gray-3);
      color: #262b31;
      border-radius: 50%;
      font-size: 20px;
      width: 40px;
      height: 40px;

      :hover {
        background: var(--gray-4);
        color: #fff;
      }
      :last-child:hover {
        background-color: #a32525;
      }
    }
  }
`;
