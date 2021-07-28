import React from 'react';
import Home from '../pages/Home'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
/*switch = Troca o componente que vai ser renderizado
 router = Define a rota e o componente que vai ser renderizado 
 Redirecet =  Redireciona para um determinado componente
 */
import { Switch, Route, Redirect } from 'react-router-dom'
import NotFound from '../pages/NotFound';
import { Styled } from './styles';
import NavBar from '../components/NavBar';
import { useAuth } from '../hooks/context/AuthProvider';
// import { Container } from './styles';

function Routes() {
  const {auth} = useAuth()
  return (
    <Styled.AppLayout>
      {auth && <NavBar />}
      {/* <Styled.Logo imgUrl={process.env.PUBLIC_URL + '../assets.back.jpg'} ></Styled.Logo> */}
      <Styled.PageLayout>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          {auth && <Route path="/home" component={Home} />}
          {auth && <Route path="/cart" component={Cart} />}
          {auth && <Route path="/profile" component={Profile} />}
          {auth && <Route path="/register" component={Register} />}
          {/* Aqui eu especifico para minha aplicação que qualquer parâmetro 
              passado diferente especificados acima vá para pagina notfound e exibe uma
              mensagem de pagina não encontrada*/}          
          <Redirect from="*" to={NotFound}></Redirect>
        </Switch>
      </Styled.PageLayout>
    </Styled.AppLayout>

  );
}

export default Routes;