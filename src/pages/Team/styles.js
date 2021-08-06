import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Styled = {
  Container: styled.div`
    width: 50%;
    margin: auto;
    background-size: center;
    display: flex;
    align-self: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 40px;
    
    @media (max-width: 1000px) {
      width: 80%;
    }
  `,
  Title: styled.h1`
    height: 100px;
    margin-top: 90px;
    display: flex;        
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${mixins.colors.secondary};
    font-family: ${mixins.fonts.bold};
    font-size: ${mixins.typograph.titleLogin};

    @media (max-width: 1000px) {
      font-size: 60px; 
    }
  `,
  Image: styled.img`
    margin-right: auto;
    margin-left: auto;
  `
};

