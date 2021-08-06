// estilização da página CreatUser

import styled from "styled-components";
import { FormControl, FormSelect, Button, FormLabel } from 'react-bootstrap';
import { mixins } from "../../styles/mixins";


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

    @media (max-width: 1000px) {
      background: ${mixins.colors.secondary};
      margin: 0;
      width: 100%;
      height: 100%;
      padding: 1rem 4.5rem;
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
      font-size: 80px;
      margin-bottom: 150px;
    }
	`,

  Error: styled.p`
    margin-top: 4px;
    align-self: center;
    justify-self: center;
    color: ${mixins.colors.red};
    font-family: ${mixins.fonts.semi_bold};
    font-size: ${mixins.typograph.paragraph};

    @media (max-width: 1000px) {
      font-size: 28px;
    }
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

    @media (max-width: 1000px) {
      width: 100%;
      height: 100%;
      font-size: 40px;
      margin: 20px 0px;
      padding: 10px;
    }
  `,
  ProfileSelect: styled(FormSelect) `
    background-color: #eee;
    border: none;
    border-bottom: 1px solid ${mixins.colors.secondary};
    width: 100%;  
    height: 35px;   
    color: rgba(0,0,0,0.5); 
    
    @media (max-width: 1000px) {
      width: 100%;
      height: 100%;
      font-size: 40px;
      margin: 20px 0px;
    }
  `,
  ProfileLabel: styled(FormLabel) `
    color: ${mixins.colors.dark};
    font-size: ${mixins.typograph.paragraph};
    font-family: ${mixins.fonts.bold};
    @media (max-width: 1000px) {
      width: 100%;
      font-size: 30px;
    }
  `, 
  ProfileOption: styled.option `
    @media (max-width: 1000px) {
      font-size: ${mixins.typograph.paragraph};
    }
  `
}

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
  @media (max-width: 1000px) {
    width: 100%;
    background-color: ${mixins.colors.foreground};
    color: ${mixins.colors.dark};
    font-size: 36px;
    display: flex;        
		flex-direction: row;
    margin: 45px 0;
  }
`;

export const ProfileButtonAlt = styled(ProfileButton) ` 
  background-color: ${mixins.colors.dark};
  color: ${mixins.colors.secondary};

  @media (max-width: 1000px) {
    color: ${mixins.colors.foreground};
    font-size: 36px;
    display: flex;        
		flex-direction: row;
  }
`