// estilização da página EditProfile

import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import { FormControl, FormSelect, Button, FormLabel } from 'react-bootstrap';

export const Styled = {
  Container: styled.div`
    margin: 6rem auto;
    width: 650px;
    height: 80%;
    background: ${mixins.colors.foreground};
    border-radius:10px;
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    justify-content: center;
    padding: 1rem 3rem;

    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
                        0 10px 10px rgba(0,0,0,0.22);
      
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

  Error: styled.p`
    margin-top: 4px;
    align-self: center;
    justify-self: center;
    color: ${mixins.colors.red};
    font-family: ${mixins.fonts.semi_bold};
    font-size: ${mixins.typograph.paragraph};
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
  box-shadow: 0 5px 5px rgba(0,0,0,0.25), 
                        0 5px 5px rgba(0,0,0,0.22);

`;

export const ProfileButtonAlt = styled(ProfileButton) ` 
  background-color: ${mixins.colors.dark};
  color: ${mixins.colors.secondary};
`