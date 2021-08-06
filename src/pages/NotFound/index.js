import React from 'react';
import Container from '../../components/Container'
import {CancelButton} from '../../components/Button'
import Notfound from '../../assets/notfound.png'
import { Link } from 'react-router-dom';

// import { Container } from './styles';


function NotFound() {
  return (

    <Container title="404 Página não encontrada" size="lg">
      <img src={Notfound} alt="Not Found" style={{width: "500px", height:"auto", marginBottom:"2rem"}}></img>
     <Link to="/home"><CancelButton width="150px">Voltar</CancelButton></Link>
    </Container>
  );
}

export default NotFound;