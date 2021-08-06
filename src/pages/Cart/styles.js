import {ListGroup} from "react-bootstrap"
import {mixins} from "../../styles/mixins"
import styled from 'styled-components'


export const Styled = {

    ItemsGroup: styled.div`
        width: 80%;
        height: 50px;
        background-color: ${mixins.colors.secondary};
        justify-self: start ;
        /* align-items: center; */
        margin-bottom: 5px;
        align-self: center;
        border-radius:10px;

        @media (max-width: 600px) {
            width: 100%;
        }
    `,

    ListGroup: styled(ListGroup)`
        display: flex;
        justify-content:space-between;
        align-self: center;
        vertical-align: center;
    `,

    ListGroupItem: styled(ListGroup.Item)`
        color: black;
        background-color: ${props => props.inputColor || "white"};  
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        width: ${props => props.width};
        /* height: 100px; */
        border: none;
        justify-content:center; 
        align-self: center;
        vertical-align: center;
        font-size: ${props => props.fontSize || "20px"};
        padding:1rem 2rem;
    `,

    ListInput: styled.input`
        border-color: "red";
        text-align: center;
        font-size: 20px;
    `,
}