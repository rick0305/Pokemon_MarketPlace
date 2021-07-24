import { Form, Button, ButtonGroup } from 'react-bootstrap';
import React from 'react';
import Container from '../../components/Container';
import {useFormik} from 'formik';
// import { Container } from './styles';


function Login() {
  const formik = useFormik({
    initialValues:{
      login:"",
      password:"",
    },
    onsubmit: values => {
      
    }
  })
  return (

   <Container title="Pokéfeira" size="sm">     
     <Form  onSubmit={formik.handleSubmit}>
       <Form.Group className="mb-5">
       <Form.Label>Login</Form.Label>
      <Form.Control
        id="login"
        name="login"
        placeholder="Digite seu email"
      ></Form.Control>
      </Form.Group>
     </Form>         
     <Form>
     <Form.Group className="mb-5">
       <Form.Label>Senha</Form.Label>
      <Form.Control
        id="password"
        name="password"
        type="password"
        placeholder="Digite sua Senha"       
      ></Form.Control>           
      </Form.Group>           
      </Form>      
      <Form>
        <ButtonGroup className="d-grid gap-2"> 
        <Button variant="danger">Login</Button>               
        <Button variant="danger">Cadastrar-se</Button>
        </ButtonGroup>
      </Form>
   </Container>

  );
}

export default Login;