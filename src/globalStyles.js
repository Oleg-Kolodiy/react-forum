import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-decoration: none;
    color: black;
  }
 :root{
    --roboto-font: "Roboto" ,sans-serif;
    --orange-color: #F48023;
    --gray-color: #EAEAEA;
    --dark-gray-color:#808080;
    --blue-color: #1682FD ;
    --bg-color: #FAFAFA;
    --error-color: #FF0000;
    --black-gray-color:#4e4e5c;
    --rose-white-color: #FCF4EC;


 }
  body {
     font-family: var(--roboto-font);
  }

`;

export const Container = styled.div`
  min-width: 320px;
  max-width: 1920px;
  margin: 0 auto;
`;
