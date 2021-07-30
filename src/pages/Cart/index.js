import React from 'react';
import Container from '../../components/Container';
import {useCart} from "../../hooks/context/CartProvider"
import {ListGroup} from "react-bootstrap"
import { FiTrash2 } from 'react-icons/fi'

import {mixins} from "../../styles/mixins"

function Cart() {

  function returnMoneyValue(number1, number2) {
    var teste = (number1 * number2).toLocaleString();
    return `R$ ${teste},00`;
  }
  function returnTotalValue(number1, number2, number3) {
    var teste = (number1 * number2 * number3).toLocaleString();
    return `R$ ${teste},00`;
  }

  const cart = useCart()

  return (
    <Container title="Cart" size="md">

      <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "5px"}}>
      <ListGroup horizontal >
        <ListGroup.Item style={{width: "150px", height: "50px", backgroundColor: `${mixins.colors.primary}`, color: "white", fontWeight: "700", border: "none", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}}></ListGroup.Item>
        <ListGroup.Item style={{width: "350px", height: "50px", backgroundColor:`${mixins.colors.primary}`, color: "white", fontWeight: "700", border: "none", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}}>Produto</ListGroup.Item>
        <ListGroup.Item style={{width: "350px", height: "50px", backgroundColor:`${mixins.colors.primary}`, color: "white", fontWeight: "700", border: "none", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}}>Quantidade</ListGroup.Item>
        <ListGroup.Item style={{width: "350px", height: "50px", backgroundColor:`${mixins.colors.primary}`, color: "white", fontWeight: "700", border: "none", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}}>Preço Unitário</ListGroup.Item>
        <ListGroup.Item style={{width: "350px", height: "50px", backgroundColor:`${mixins.colors.primary}`, color: "white", fontWeight: "700", border: "none", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}}>Preço Total</ListGroup.Item>
        <ListGroup.Item style={{width: "80px", height: "50px", backgroundColor:`${mixins.colors.primary}`, color: "white", fontWeight: "700", border: "none", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "24px"}}></ListGroup.Item>
      </ListGroup>
      </div>

      {Object.keys(cart.cart).map(key => {
        const product = cart.cart[key]
        const weight = product.product.pokemon.weight
        const height = product.product.pokemon.height
        return (
          <div key={key} style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "5px"}}>
          <ListGroup horizontal >
            <ListGroup.Item style={{width: "150px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}}><img src={product.product.pokemon.sprites.front_default} /></ListGroup.Item>
            <ListGroup.Item style={{width: "350px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}}>{product.product.pokemon.name}</ListGroup.Item>
            <ListGroup.Item style={{width: "350px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}}>{product.quantity}</ListGroup.Item>
            <ListGroup.Item style={{width: "350px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}}>{returnMoneyValue(height, weight)}</ListGroup.Item>
            <ListGroup.Item style={{width: "350px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}}>{returnTotalValue(height, weight, product.quantity)}</ListGroup.Item>
            <ListGroup.Item style={{width: "80px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "24px"}}><FiTrash2 /></ListGroup.Item>
          </ListGroup>
          </div>
        )
      })}
    </Container>
  )
}

export default Cart;