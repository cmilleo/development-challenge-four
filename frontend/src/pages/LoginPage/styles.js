import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--blue-2);
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;

  .containerModal {
    width: 95%;
    position: absolute;
    inset: 0;
    margin: auto;
    background-color: #fff;
    height: 400px;
    max-width: 450px;
    border-radius: 12px;
    padding: 60px 0 20px 0;
    -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.78);
    box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.78);
    animation: fadeInLogin 1s ease-out backwards;

    .backLanding {
      position: absolute;
      color: var(--gray-4);
      top: 20px;
      right: 25px;
      cursor: pointer;
      :hover {
        color: #000;
      }
    }
    .iconHeader {
      width: 100px;
      height: 100px;
      background-color: var(--blue-3);
      position: absolute;
      right: 0;
      left: 0;
      top: -50px;
      border-radius: 50%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 60px;
      color: #fff;
    }

    form {
      width: 90%;
      margin: 0 auto;
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      svg {
        cursor: pointer;
        font-size: 20px;
      }
    }

    .dontHaveAccount {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      button {
        font-size: 13px;
        background-color: transparent;
        text-decoration: underline;
        color: var(--blue-2);
        :hover {
          color: var(--gray-4);
        }
      }
    }
  }
  @keyframes fadeInLogin {
    from {
      opacity: 0;
      transform: translateY(-35%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
