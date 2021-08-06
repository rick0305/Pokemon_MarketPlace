import React, {useHistory} from 'react';
import Container from '../../components/Container'
import {CancelButton} from '../Login/styles'

// import { Container } from './styles';


function NotFound() {

  return (

    <Container title="404 Not Found" size="lg">
      {/* <CancelButton width="150px">Voltar</CancelButton> */}
    </Container>
  );
}

export default NotFound;