import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

// export  const  Container  =  styled.div`
    
//     margin: 0 auto;
//     display:flex;
//     justify-content: space-between;
// `

export const Styled = {

    Nav: styled.nav`
        position: absolute;
        z-index: 1;  
        width: 100%;
        height: 70px;
        display: flex;
        padding: 14px 50px;
        margin-bottom: 40px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: ${mixins.colors.primary};

        @media (max-width: 786px) {
            flex-direction: column;
        }
    `,
    NavBrand: styled.img`
        width: 120px;
        height: auto;
        margin-left: 20px;
        
        &:hover {
            transform: scale(1.05);
        }
    `,

    NavItems: styled.ul`
        list-style: none;
        padding-inline-start: 0;
        display: flex;
        align-items: center;
        align-content: center;    
    `,

    NavItem: styled(Link)`
        margin-right: 20px;
        cursor: pointer;
        cursor: pointer;
        color: ${mixins.colors.foreground};
        text-decoration: none;
        font-size: 25px;

        &:hover {
            transform: scale(1);
            color: ${mixins.colors.secondary}
        }
    `,

    NavSearch: styled.input`    
        width: 350px;
        height: 35px;
        display: flex;
        align-self: center;
        color: black;
        text-align:center;
        border: none;
        border-radius: 10px;
        background-color: white;   
    `,

    Text: styled.p`
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${mixins.fonts.bold};
        font-weight: 700;
        color: red;
        background-color: ${mixins.colors.yellow};
        height: 23px;
        width: 23px;
        border-radius: 50%;
    `,
}
    

// export const NavItemButton = styled(NavItem)`
//     padding: 10px 10px;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     border: 1px solid #663399;
//     /* add additional styles for primary*/
// `;
