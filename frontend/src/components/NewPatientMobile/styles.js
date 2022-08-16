import styled, { css } from "styled-components";

export const Container = styled.div`
  button {
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background: var(--blue-3);
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    z-index: 10;
    :hover {
      background: var(--blue-2);
    }
  }

  .formPatientMobile {
    background: var(--gray-2);
    height: 75%;
    max-height: 760px;
    position: absolute;
    bottom: 0;
    padding: 0 10px 50px 10px;
    z-index: 9;
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    overflow: auto;
    -webkit-box-shadow: 0px -3px 50px 25px rgba(0, 0, 0, 0.68);
    box-shadow: 0px -3px 50px 25px rgba(0, 0, 0, 0.68);
    .headerModal {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      svg {
        cursor: pointer;
      }
    }

    button {
      /* position: static; */
      right: 0;
      margin-top: 10px;
    }
    .birthLabel {
      font-size: 16px;
      display: flex;
      flex-direction: column;
      margin-top: 15px;
      span {
        margin-bottom: 5px;
        color: gray;
      }
    }
    .containerEndececo {
      margin-top: 15px;
    }
  }
  ${({ animationout }) => {
    if (!animationout) {
      return css`
        .formPatientMobile {
          animation: fadeInModalPatients 1s ease-in-out backwards;
        }
      `;
    } else {
      return css`
        .formPatientMobile {
          animation: fadeOutModalPatients 1s ease-in-out forwards;
        }
      `;
    }
  }}

  @keyframes fadeInModalPatients {
    0% {
      opacity: 0;
      transform: translateY(+100%);
    }
    70% {
      opacity: 1;
      transform: translateY(-10%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes fadeOutModalPatients {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(+100%);
    }
  }
`;
