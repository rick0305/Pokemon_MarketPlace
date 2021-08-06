import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
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

// import { Container } from './styles';



function Routes() {
  const {auth} = useAuth()
  let location = useLocation();

  const excludedRoutes = ['/login', '/register']
 
  return (
    <Styled.AppLayout>
      {!excludedRoutes.includes(location.pathname) && <NavBar />}     
      <Styled.PageLayout>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
              <Route path="/" exact component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/cart" component={Cart} />
              <Route path="/profile/:id" component={Profile} />
              <Route path="/whoweare" component={WhoWeAre} />
              <Route path="/types" component={Type} />
              <Route path="/team" component={Team} />
              <Route path="/contact" component={Contact} />     
              <Route component={NotFound} />
        </Switch>
      </Styled.PageLayout>
      {/* {auth && <Footer />} */}
    </Styled.AppLayout>

  );
}

export default Routes;