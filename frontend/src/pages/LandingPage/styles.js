import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--blue-2);
  height: 100vh;
  width: 100vw;
  padding: 70px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  .containerTitle {
    width: 95%;
    h1,
    h2 {
      color: var(--gray-1);
      font-size: 28px;
      width: 95%;
      margin: 0 auto;
      text-align: center;

      span {
        color: var(--blue-3);
      }
    }
    animation: fadeInLanding 1s ease-in-out backwards;
  }
  .containerDetails {
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
  }
  .shape {
    height: 100vh;
    width: 100vw;
    background-color: var(--blue-3);
    position: absolute;
    z-index: 0;
    width: 50%;
    /* max-width: 800px; */
    border-top-left-radius: 70%;
    border-bottom-left-radius: 120%;
    right: 0;
  }
  .animation {
    animation: fadeInLanding 1.3s ease-in-out backwards;
    animation-delay: 0.3s;
  }
  button {
    animation: fadeInLanding 1s ease-in-out backwards;
    animation-delay: 0.6s;
  }
  @media (min-width: 800px) {
    flex-direction: row-reverse;
    padding: 20px;
    .containerDetails {
      width: fit-content;
      white-space: nowrap;
      z-index: 1;
    }
    .containerTitle {
      font-size: 30px;
      z-index: 1;
    }
    button {
      width: 300px;
      z-index: 1;
    }
  }
  @media (min-width: 1400px) {
    .containerTitle {
      h1,
      h2,
      span {
        font-size: 50px;
      }
    }
    button {
      width: 400px;
      height: 60px;
      font-size: 25px;
    }
  }

  @keyframes fadeInLanding {
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
