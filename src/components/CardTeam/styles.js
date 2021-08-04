import styled from 'styled-components';
import { mixins } from "../../styles/mixins";

export const Box = styled.div`
	padding: 50px 0 30px 0;
	background: rgb(240,36,45);
        background: linear-gradient(340deg, rgba(240,36,45,1) 0%, rgba(246,160,32,1) 64%);	position: relative;
	bottom: 0;
	width: 100%;

	@media (max-width: 1000px) {
		padding: 50px 0 30px 0;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 700px;
	margin: 0 auto;
`

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 60px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill,
		minmax(185px, 1fr));
	grid-gap: 20px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(auto-fill,
			minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;
	color: white;

	&:hover {
		color: yellow;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: ${mixins.typograph.subTitle};
	margin-bottom: 40px;
	font-weight: bold;
`;

export const Title = styled.h5`
	margin-top: 30px;
	display: flex;        
	flex-direction: row;
	align-items: center;
	justify-content: center;
	font-family: ${mixins.fonts.bold};
	font-size: ${mixins.typograph.paragraph};
`;
