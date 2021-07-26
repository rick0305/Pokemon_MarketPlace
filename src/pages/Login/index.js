import { Form, Button, ButtonGroup } from 'react-bootstrap';
import Container from '../../components/Container';
import {useFormik} from 'formik';
import { useAuth } from '../../hooks/context/AuthProvider';
import { useHistory } from 'react-router-dom';
import { Styled } from '../../components/Container/styles';
import Logo from '../../assets/logo.png';



function Login() {
  const {signIn}   = useAuth()
  const history = useHistory()
  const formik = useFormik({
    initialValues:{
      login:"",
      password:"",
    },    
    onsubmit: async values => {
      await signIn(values)
      history.push("/home")
    }
  })
  return (        
   <Container size="sm">            
     <Form  onSubmit={formik.handleSubmit}>      
       <Form.Group className="mb-5">       
       <Form.Label>Login</Form.Label>
      <Form.Control       
       id="login"
       name="login"
       placeholder="Coloque o seu login" 
       onChange={formik.handleChange}
       isValid={formik.touched.login && !formik.errors.login}
       isInvalid={formik.errors.login}
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
           placeholder="Coloque a sua senha" 
           onChange={formik.handleChange}
           isValid={formik.touched.password && !formik.errors.password}
           isInvalid={formik.errors.password}    
      ></Form.Control>           
      </Form.Group>           
      </Form>      
      <Form>
        <ButtonGroup className="d-grid gap-2"> 
        <Button variant="danger" type="submit">Login</Button>               
        <Button variant="link">Cadastrar-se</Button>
        </ButtonGroup>       
      </Form>
   </Container>

  );
}

export default Login;