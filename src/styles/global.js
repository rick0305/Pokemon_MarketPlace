//classes globais de estilização
import { mixins } from './mixins';
//injetando na aplicação atraves de um context toda estrutura padrão de estilização que vamos usar na aplicação
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import "~bootstrap/scss/bootstrap";
@font-face {
  font-family: 'Lato-Black';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: local('Lato-Black'), url('./assets/fonts/Lato-Black.ttf') format('truetype');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Lato-Bold';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Lato-Bold'), url('./assets/fonts/Lato-Bold.ttf') format('truetype');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Lato-Regular';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Lato-Regular'), url('./assets/fonts/Lato-Regular.ttf') format('truetype');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Lato-Light';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Lato-Light'), url('./assets/fonts/Lato-Light.ttf') format('truetype');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    .MuiDrawer-paperAnchorDockedLeft {
    border-right: none !important;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 5px;
    }
    &::-webkit-scrollbar {
        width: 16px;
        border-radius: 5px;
        background: #fff;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: ${mixins.colors.primary};
        border:4px solid #fff;
    }
  }
  body {
    background: ${mixins.colors.background};
    --webkit-font-smoothing: antialiased;
  }
  #root, body, html {
    height: 100%;
  }
  #root {
    min-width: 900px;
    width: 100vw;
    margin: 0 auto;
  }
  body, button, textarea, input {
    font: ${mixins.typograph.paragraph} ${mixins.fonts.normal};
  }
  button {
    cursor: pointer;
  }
  ul {
    list-style: none;
  }
`