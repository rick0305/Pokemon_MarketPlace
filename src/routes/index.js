import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/context/AuthProvider';
import { Styled } from './styles';
import NavBar from '../components/NavBar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import WhoWeAre from '../pages/WhoWeAre';
import Team from '../pages/Team';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Type from '../pages/PokemonType';
import Search from "../pages/Search"

// import { Container } from './styles';

function Routes() {
  const {auth} = useAuth()
  return (
    <Styled.AppLayout>
      {/* <Styled.Logo imgUrl={process.env.PUBLIC_URL + '../assets.back.jpg'} ></Styled.Logo> */}
      <Styled.PageLayout>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register}></Route>
          <Route path="/team" component={Team} />
          <Route path="/contact" component={Contact} />
          <Route path="/history" component={WhoWeAre} />
          {auth && <Route path="/cart" component={Cart} />}
          {auth && <Route path="/profile" component={Profile} />}
          {auth && <Route path="/types" component={Type} />}
          {/* Aqui eu especifico para minha aplicação que qualquer parâmetro 
              passado diferente especificados acima vá para pagina notfound e exibe uma
              mensagem de pagina não encontrada*/}          
          <Redirect from="*" to={NotFound}></Redirect>
        </Switch>
      </Styled.PageLayout>
      {/* {auth && <Footer />} */}
    </Styled.AppLayout>

  );
}

export default Routes;