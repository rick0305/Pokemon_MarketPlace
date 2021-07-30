import styled from "styled-components";
import { mixins } from "../../styles/mixins";

const ContainerSM = styled.div`
	margin:180px 0;
    width:355px;
    height: 479px;
	background-color: ${mixins.colors.primary};
    align-self: flex-end;
    margin-right: 200px;
    padding: 50px;
	//border-radius:25px;	 	  
`
export const Styled = {
    ContainerSM,
    ContainerLG: styled(ContainerSM)`       
		margin: 5% 0;
		width: 90%;       
		align-items: center;
		border-radius: 25px;
		flex-direction: column;
		justify-content: center;
		padding: none;
	`,
    Title: styled.h1`		
		display: flex;
        margin-left:80px;        		
		flex-direction: row;
		color: ${mixins.colors.foreground};
		font-family: ${mixins.fonts.bold};
		font-size: ${mixins.typograph.titleLogin};		
	`,
};