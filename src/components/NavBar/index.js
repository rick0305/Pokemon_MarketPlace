import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiLogOut, FiShoppingCart } from 'react-icons/fi'
import Logo from '../../assets/logov1.png'
import { useAuth } from '../../hooks/context/AuthProvider';
import { useHistory } from 'react-router-dom';
import {useCart} from "../../hooks/context/CartProvider"

import { Styled } from './styles';


function NavBar() {

  //cart
  const cart = useCart();
  const itemsCount = Object.keys(cart.cart).reduce((prev, curr) => {
    return prev + cart.cart[curr].quantity;
  }, 0)

  //login
  const { SignOut } = useAuth();
  const history = useHistory();

  const handleClick = async () => {
    await SignOut()
    history.push("/")
  }
  return (        
    <Styled.Nav>
        <Link to="/home"><Styled.NavBrand src={Logo}></Styled.NavBrand></Link>
        <Styled.NavSearch type="search" placeholder="Search" aria-label="Search"></Styled.NavSearch>
        <Styled.NavItems>
            {itemsCount > 0 &&
              <Styled.Text>{itemsCount}</Styled.Text>
            }
            <Styled.NavItem to="/cart"><FiShoppingCart/></Styled.NavItem>
            <Styled.NavItem to="/profile"><FiUser /></Styled.NavItem>
            <Styled.NavItem onClick={handleClick}><FiLogOut/></Styled.NavItem>
        </Styled.NavItems>
    </Styled.Nav>        
  );
}


export default NavBar;