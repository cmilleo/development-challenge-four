import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border:0;
}

:root{
    --blue-1: #CAF0F8;
    --blue-2: #15293B;
    --blue-3: #009ADF;
    --green-1: #1aaf1a;
    --gray-1: #F8F9FA;
    --gray-2: #E9ECEF;
    --gray-3: #ADB5BD;
    --gray-4: #495057;
    --black: #000000;
    --white: #FFFFFF;
}

body{

    width: 100vw;
    height: 100vh;
}

body, input, button {
    font-family: Inter, serif;
    font-size: 1rem;
}

button{
    cursor: pointer;
    transition: all 0.3s;
}

a{
    text-decoration: none;
}
`;

export const PrimaryButton = styled.button`
  width: ${({ width }) => (width ? width : "100%")};
  background-color: var(--blue-3);
  margin: 0 auto;
  height: 40px;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;

  &:hover {
    background-color: #36728c;
  }
`;
