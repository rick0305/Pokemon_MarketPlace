// estilização da página CreatProduct

import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Styled = {
  Container: styled.div`
    margin: 80px 0;
    width: 700px;
    height: 100%;
    background-color: ${mixins.colors.secondary};
    border-radius:25px;
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: top;
    justify-content: center;
    padding: 50px;
  `,
  Title: styled.h1`
		height: 100px;
		display: flex;        
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: ${mixins.colors.foreground};
		font-family: ${mixins.fonts.bold};
		font-size: ${mixins.typograph.titleLogin};
	`,
  Error: styled.p`
    margin-top: 4px;
    align-self: center;
    justify-self: center;
    color: ${mixins.colors.red};
    font-family: ${mixins.fonts.semi_bold};
    font-size: ${mixins.typograph.paragraph};
  `
}