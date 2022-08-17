import styled from "styled-components";

export const Container = styled.div`
  .containerModal {
    background: var(--gray-2);
    width: 300px;
    height: 610px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 4px;
    flex-direction: column;
    text-align: center;
    padding: 10px;
    -webkit-box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.5);
    box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.5);

    .formPatientDesktop {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }

    .birthLabel {
      font-size: 16px;
      display: flex;
      text-align: left;
      flex-direction: column;
      margin-top: 15px;
      span {
        margin-bottom: 5px;
        color: gray;
      }
    }
    .containerEndececo {
      color: gray;

      text-align: left;
    }
    .headerModal {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      svg {
        cursor: pointer;
      }
      h4 {
        padding: 0;
        margin: 0;
        width: fit-content;
      }
    }
    .formPatient {
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 10px;
      span {
        color: var(--gray-4);
      }
    }
    button {
      margin-top: 5px;
    }
  }
`;
