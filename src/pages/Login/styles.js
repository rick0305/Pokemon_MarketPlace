import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import bg from "../../assets/login-page.png"
export const Styled = { 

      Container: styled.div`
      width: 110%;
      height: 110%;      
      background: url(${bg}) no-repeat;  
      background-size: cover;      
      display: flex;
      align-self: center;      
      justify-content: center;
      flex-direction: column;

`,

  Error: styled.p`
        align-self: center;
        justify-self: center;
        color: ${mixins.colors.third};
        font-family: ${mixins.fonts.semi_bold};
        font-size: ${mixins.typograph.campoObrigatorio};
    `
};
export const LoginButton = styled.button`
  
          background-color:${mixins.colors.sixth};
          text-align: center;
          text-decoration:${mixins.colors.third};
          font-size:18px;                    
          width: 100%;
          height: 35px;
          border-radius:10px;  
          border:none;
          font-weight:900;

`;

