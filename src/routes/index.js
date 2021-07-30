import React from 'react';
import Home from '../pages/Home'
import Login from '../pages/Login'
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
      <Styled.PageLayout>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          {auth && <Route path="/home" component={Home} />}
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