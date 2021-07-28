import styled from "styled-components";
import { mixins } from "../../styles/mixins";

const ContainerSM = styled.div`
	margin:180px 0;
	width:3 55px;
	height: 479;
	background-color: ${mixins.colors.primary};
	align-self: flex-end;
	margin-right: 200px;
	padding: 50px;
//border-radius:25px;
	padding: 50px;   
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
		height: 100px;
		display: flex;        
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: ${mixins.colors.foreground};
		font-family: ${mixins.fonts.bold};
		font-size: ${mixins.typograph.titleLogin};
	`,
};