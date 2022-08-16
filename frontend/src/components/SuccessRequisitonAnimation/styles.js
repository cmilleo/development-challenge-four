import styled from "styled-components";

const Container = styled.div`
  .bgModal {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: bgModal 1s ease-in-out forwards;
  }
  .modal {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #329f32;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: modal 1s ease-in-out backwards;
    animation-delay: 1s;
  }
  svg {
    animation: success 1s ease-in-out backwards;
    animation-delay: 1.4s;
  }
  @keyframes bgModal {
    0% {
      opacity: 0;
      clip-path: circle(0% at 50% 50%);
    }
    100% {
      opacity: 1;
      clip-path: circle(70.7% at 50% 50%);
    }
  }
  @keyframes modal {
    0% {
      transform: scale(0);
    }
    70% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes success {
    0% {
      transform: scale(0);
    }
    70% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
export default Container;
