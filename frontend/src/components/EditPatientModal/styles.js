import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  z-index: 10;

  .containerModal {
    background: #fff;
    width: 300px;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    inset: 0;
    margin: auto;
    border-radius: 4px;
    flex-direction: column;
    text-align: center;
    padding: 10px;

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
  }
`;
