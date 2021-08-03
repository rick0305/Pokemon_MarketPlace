import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiLogIn, FiLogOut, FiShoppingCart, FiSearch } from 'react-icons/fi'
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
  const { auth, SignOut } = useAuth();
  const history = useHistory();

 

  const handleClick = async () => {            
    await
    history.push("/login")  
  }

  return (        
    <Styled.Nav>
      <Styled.NavArea>        
          <Link to="/home"><Styled.NavBrand src={Logo}></Styled.NavBrand></Link>
          <Styled.NavItems>
              {itemsCount > 0 &&
                <Styled.Text>{itemsCount}</Styled.Text>
              }
              <Styled.NavItem to="/cart"><FiShoppingCart/></Styled.NavItem>
              <Styled.NavItem to="/profile"><FiUser /></Styled.NavItem>
              <Styled.NavItem> {auth ? <FiLogOut onClick={SignOut}/> : <FiLogIn onClick={handleClick} /> }</Styled.NavItem>
          </Styled.NavItems>
          </Styled.NavArea>
            <Styled.NavForm className="d-flex">
              <Styled.NavSearch type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search">
                  
                </Styled.NavSearch>
                <Styled.NavItemButton><FiSearch /></Styled.NavItemButton>
            </Styled.NavForm>
    </Styled.Nav>
  );
}


export default NavBar;
