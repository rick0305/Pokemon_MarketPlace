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
    `,

    ListGroup: styled(ListGroup)`
        display: flex;
        justify-content:space-between;
        align-self: center;
        vertical-align: center;
    `,

    ListGroupItem: styled(ListGroup.Item) `
        background-color:transparent;
        display: flex;
        /* width: 150px; */
        /* height: 50px; */
        border: none;
        justify-content:center; 
        align-self: center;
        vertical-align: center;
        font-size: 20px;
        padding:1rem 2rem;
    `
}