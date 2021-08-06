import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiLogIn, FiLogOut, FiShoppingCart, FiSearch } from 'react-icons/fi'
import Logo from '../../assets/logov1.png'
import { useAuth } from '../../hooks/context/AuthProvider';
import { useHistory } from 'react-router-dom';
import {useCart} from "../../hooks/context/CartProvider"
import TypeMenu from '../TypeMenu';
import { useDispatch, useSelector } from 'react-redux';
import {setPokemon} from "../../redux/pokemonSearch"



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
  
  //se estiver nao logado vai para pagina login se sim para o pagina perfil
  const isLogged = () => {
    if(!auth){
      return "/login"
    }
    return "/profile"
  }

  const [searchName, setSearchName] = useState("")

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault()
    setSearchName(e.target.value)
  }

  const handleClick = async () => {            

  //usuario vai para a pagina de login
  const handleSignIn = async () => {            
    await
    history.push("/login")  
  }

  const handleSearch = async () => {            
    dispatch(setPokemon(searchName))
    history.push("/search")  

  //signout e volta pra pagina home
  const handleSignOut = async () => {            
    await SignOut()
    history.push("/home")  

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
              <Styled.NavItem to={isLogged}><FiUser /></Styled.NavItem>
              <Styled.NavItem> {auth ? <FiLogOut onClick={handleSignOut}/> : <FiLogIn onClick={handleSignIn} /> }</Styled.NavItem>
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
