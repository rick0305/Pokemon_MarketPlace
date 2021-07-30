import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiLogOut, FiShoppingCart } from 'react-icons/fi'
import Logo from '../../assets/logov1.png'
import { useAuth } from '../../hooks/context/AuthProvider';
import { useHistory } from 'react-router-dom';

import { Styled } from './styles';


function NavBar() {

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
            <Styled.NavItem to="/cart"><FiShoppingCart/></Styled.NavItem>
            <Styled.NavItem to="/prod"><FiUser /></Styled.NavItem>
            <Styled.NavItem onClick={handleClick}><FiLogOut/></Styled.NavItem>
        </Styled.NavItems>
    </Styled.Nav>        
  );
}


export default NavBar;