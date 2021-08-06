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
  function returnAllValue(number1) {
    var teste = (number1).toLocaleString();
    return `R$ ${teste},00`;
  }


  const cart = useCart()

  const remove = id => () => {
    cart.removeFromCart(id)
  }

  const changeQuantity = (id) => (evt) => {
    cart.changeQuantity(id, Number(evt.target.value))
  }

  const handlePurchase = () => {
    cart.removeAllItems()
    alert("Compra finalizada com sucesso")
  }

  const allItemsPrice = () => {
    let total = 0
    Object.keys(cart.cart).map(key => {
      const product = cart.cart[key]
      const weight = product.product.pokemon.weight
      const height = product.product.pokemon.height
      const quantity = product.quantity
      return (total += (weight * height * quantity))
    })
    return total
  }

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

      {allItemsPrice() === 0 &&
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <h2>Carrinho Vazio</h2>
      </div>
      }

      {Object.keys(cart.cart).map(key => {
        const product = cart.cart[key]
        const weight = product.product.pokemon.weight
        const height = product.product.pokemon.height
        return (
          <div key={key} style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "5px"}}>
          <ListGroup horizontal >
            <ListGroup.Item style={{width: "150px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}}><img src={product.product.pokemon.sprites.front_default} /></ListGroup.Item>
            <ListGroup.Item style={{width: "350px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}}>{product.product.pokemon.name}</ListGroup.Item>
            <ListGroup.Item style={{width: "350px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}}><input type="number" defaultValue={product.quantity} onBlur={changeQuantity(key)}></input></ListGroup.Item>
            <ListGroup.Item style={{width: "350px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}}>{returnMoneyValue(height, weight)}</ListGroup.Item>
            <ListGroup.Item style={{width: "350px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}}>{returnTotalValue(height, weight, product.quantity)}</ListGroup.Item>
            <ListGroup.Item style={{width: "80px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "24px"}}><FiTrash2 onClick={remove(key)} /></ListGroup.Item>
          </ListGroup>
          </div>
        )
      })}
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "5px"}}>
      <ListGroup horizontal >
        <ListGroup.Item style={{width: "350px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}}>Total</ListGroup.Item>
        <ListGroup.Item style={{width: "350px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}}>{returnAllValue((allItemsPrice()))}</ListGroup.Item>
      </ListGroup>
      </div>
      <button onClick={handlePurchase}>Finalizar Compra</button>
    </Container>
  )
}

export default Cart;