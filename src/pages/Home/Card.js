import React, { useState } from "react";
import "./style.css";
import typeColors from "./typeColors";
import { Button, Modal, ModalBody, Toast } from "react-bootstrap";
import { useCart } from "../../hooks/context/CartProvider";

function Card({ pokemon, toggleProduct, key }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function returnMoneyValue(number1, number2) {
    var teste = (number1 * number2).toLocaleString();
    return `R$ ${teste},00`;
  }

  function poundsToKilos(number) {
    return (number / 2.2046).toFixed(2);
  }

  function toMeter(number) {
    return (number / 10).toFixed(2);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //context
  const cart = useCart()
  const add = (pokemon) => () => {
    cart.addToCart({pokemon})
  }

  return (
    <div key={pokemon.id}>
    <div className="Card">
      <div className="Card__img" onClick={handleShow}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="Card__name">
        <p className="paragraph">
          {pokemon.name} #{pokemon.id} 
        </p>
      </div>
      <div className="Card__types">
        {pokemon.types.map((type) => {
          return (
            <div
              className="Card__type"
              style={{ backgroundColor: typeColors[type.type.name] }}
            >
              {capitalizeFirstLetter(type.type.name)}
            </div>
          );
        })}
      </div>
      <div className="Card__info">
        <div className="Card__types">
          <Modal show={show} onHide={handleClose} centered key={pokemon.id}>
            <Modal.Header>
              <Modal.Title>{capitalizeFirstLetter(pokemon.name)}</Modal.Title>
            </Modal.Header>
            <ModalBody>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <img src={pokemon.sprites.back_default} alt={pokemon.name} />
              </div>
              {pokemon.types.map((type) => {
                return (
                  <div
                    className="Card__type"
                    style={{ backgroundColor: typeColors[type.type.name] }}
                  >
                    {capitalizeFirstLetter(type.type.name)}
                  </div>
                );
              })}
            </ModalBody>
            <Modal.Body>
              <p className="title">
                <b>Peso</b>
              </p>
              <p>{poundsToKilos(pokemon.weight)}</p>
              <p className="title">
                <b>Altura</b>
              </p>
              <p>{toMeter(pokemon.height)}</p>
              <p className="title">
                <b>Habilidade</b>
              </p>
              <p>{capitalizeFirstLetter(pokemon.abilities[0].ability.name)}</p>
              <p className="title">
                <b>Preço</b>
              </p>
              <p>{returnMoneyValue(pokemon.height, pokemon.weight)}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleClose}
                style={{ marginLeft: "2px" }}
              >
                Fechar
              </Button>
              <Button
                variant="primary"
                onClick={add(pokemon)}
                style={{
                  marginLeft: "2px",
                  backgroundColor: "#EF4036",
                  borderColor: "#EF4036",
                }}
              >
                Adicionar ao Carrinho
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        </div>
        <div className="Card__name">
          <p className="price">
            {returnMoneyValue(pokemon.height, pokemon.weight)}
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="danger" onClick={add(pokemon)}>Adicionar ao Carrinho</Button> 
        </div>
      </div>
    </div>
  );
}

export default Card
