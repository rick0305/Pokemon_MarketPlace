// estilização da página EditProfile

import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import { FormControl, FormSelect, Button, FormLabel } from 'react-bootstrap';
import { device } from "../../styles/device";

export const Styled = {
  Container: styled.div`
    margin-top: 120px;
    overflow: scroll; 
    padding: 1rem 1rem 0 2rem;
    height: 100%;
    width: 100% ;
    background: ${mixins.colors.foreground};

  @media ${device.tablet} {
    margin: 5rem 6rem auto;
    width: 650px;
    background: ${mixins.colors.foreground};
    border-radius:10px;
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    justify-content: center;
    height: 80%;
    padding-right: 2rem;
    /* padding: 1rem 3rem; */

    box-shadow: ${mixins.styles.shadowBox};

  }
      
  `,
  Title: styled.h1`
		padding: 1rem 0;
		display: flex;        
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: ${mixins.colors.secondary};
		font-family: ${mixins.fonts.bold};
		font-size: ${mixins.typograph.titleLogin};
	`,

  Error: styled.span`
    margin-top: 4px;
    align-self: center;
    justify-self: center;
    color: ${mixins.colors.red};
    font-family: ${mixins.fonts.semi_bold};
    font-size: ${mixins.typograph.paragraph};
    padding: 10px
  `,

  ProfileInput: styled(FormControl) `
    background-color: #eee;
    border: none;
    border-bottom: 1px solid ${mixins.colors.secondary};
    width: 100%;  
    height: 35px;  

    &:focus {
      outline: none;
    }
  `,
  ProfileSelect: styled(FormSelect) `
   background-color: #eee;
    border: none;
    border-bottom: 1px solid ${mixins.colors.secondary};
    width: 100%;  
    height: 35px;   
    color: rgba(0,0,0,0.5);  
  `,
  ProfileLabel: styled(FormLabel) `
    color: ${mixins.colors.dark};
    font-size: ${mixins.typograph.paragraph};
    font-family: ${mixins.fonts.bold};
  `
};

export const ProfileButton = styled(Button)  `
  background-color: ${mixins.colors.secondary};
  border: none;
  border-radius: 10px;
  padding: 0.8rem;
  margin-right: 1rem; 
  color: ${mixins.colors.dark};
  font-family: ${mixins.fonts.bold};
  box-shadow: ${mixins.styles.shadowButton};

`;

export const ProfileButtonAlt = styled(ProfileButton) ` 
  background-color: ${mixins.colors.dark};
  color: ${mixins.colors.secondary};
`