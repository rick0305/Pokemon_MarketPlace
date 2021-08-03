import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mixins } from '../../styles/mixins';
import { device } from '../../styles/device'
import { Form, FormControl, Button } from 'react-bootstrap'

export const Styled = {

    Nav: styled.nav`
    
        display: flex;
        flex-direction: column;
        position: absolute;
        z-index:1;
        width: 100%;
        height: 130px;
        align-items: center;
        padding: 1rem;
        justify-content: space-between;
        background: rgb(240,36,45);
        background: linear-gradient(340deg, rgba(240,36,45,1) 0%, rgba(246,160,32,1) 64%);

        @media ${device.tablet} {
            height: 70px;
            flex-direction: row;
        }
    `,

    NavArea: styled.div`
        width: 90%;
        height: 90%;
        display: flex;
        
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        
        
        @media ${device.tablet} {
            width: 80%;
            padding-left: 1rem;
            flex-direction: row; 
        }
    `,

    NavBrand: styled.img`
        width: 100px;
        height: auto;
        margin: 0 1rem;

        @media ${device.tablet} {
            width: 120px;
            margin-left: 2rem;
        
            &:hover {
                transform: scale(1.05);
            }
            
        }
    `,

    NavItems: styled.div`
        display: flex;
        align-items: center;
        position: relative;
        padding: 1rem;        
    `,
    
    NavItem: styled(Link)`
        margin-right: 1rem;
        color: ${mixins.colors.foreground};
        text-decoration: none;
        font-size: 1.5rem;
        
        @media ${device.tablet} {
            margin-right: 1.5rem;
            cursor: pointer;
            font-size: 1.7rem;

            &:hover {
                transform: scale(1);
                color: ${mixins.colors.secondary}
            }

        } 
    `,
    NavForm: styled(Form) `
        width: 90%;

        @media ${device.tablet} {
            width: 20%;
        }
    `,
    NavSearch: styled(FormControl)`  
        
        position:relative;
        height: 35px;
        width: 90%;
        display: flex;
        align-self: center;
        color: black;
        text-align:center;
        border:none;
        border-radius: 10px;
        background-color: white;

        @media ${device.tablet} {  
            width: 100%; 
        } ;   
    `,

    Text: styled.p`
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: ${mixins.fonts.bold};
        color: ${mixins.colors.primary};
        background-color: ${mixins.colors.secondary};
        height: 1.2rem;
        width: 1.2rem;
        border-radius: 50%;

        @media ${device.tablet} {
            height: 1.5rem;
            width: 1.5rem;
        }
    `,

    NavItemButton: styled(Button)`
        font-size: 25px;
        color: white;
        /* padding: 10px 10px; */
        align-self: center;
        vertical-align: center;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        border: none;
        background-color: transparent;
        
        &:hover {
            color: ${mixins.colors.secondary};
            background-color: transparent;
            
        }
    `,
};

