import styled from "styled-components";
import { mixins } from "../../styles/mixins";
const ContainerSM = styled.div`
margin:180px 0;
width:355px;
height: 479;
background-color: ${mixins.colors.secondary};
align-self: flex-end;
margin-right: 200px;
padding: 50px;   
`
export const Styled = {
    ContainerSM,
    ContainerLG: styled(ContainerSM)`       
        margin: 5% 0;
        width: 90%;       
        align-items: left;
        border-radius: 25px;
        flex-direction: column;
        justify-content: center;
        padding: none;
    `,
    Title: styled.h1`
        margin-left:55px;        
        display: flex;       
        color: ${mixins.colors.third};
        font-family: ${mixins.fonts.bold};
        font-size: ${mixins.typograph.title};
    `,  
      SubTitle: styled.h3`
      font-size: ${mixins.typograph.subTitle};
      
      `    
     
      
};