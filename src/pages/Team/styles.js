import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Styled = {
  Container: styled.div`
    width: 110%;
    height: 110%;
    background-size: center;
    display: flex;
    align-self: center;
    justify-content: center;
    flex-direction: column;
    
    @media (max-width: 1000px) {
      
    }
  `,
  Title: styled.h1`
    height: 100px;
    display: flex;        
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${mixins.colors.secondary};
    font-family: ${mixins.fonts.bold};
    font-size: ${mixins.typograph.titleLogin};

    @media (max-width: 1000px) {
      color: ${mixins.colors.foreground};
      font-size: 70px;
      margin: 60px;
    }
  `,
};

