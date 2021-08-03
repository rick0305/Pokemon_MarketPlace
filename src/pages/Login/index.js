import React, { useMemo } from 'react';
import { Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useAuth } from '../../hooks/context/AuthProvider';
import { useHistory, Link } from 'react-router-dom';
import { Styled, LoginButton, LoginBox, LoginInput, LoginForm, LgTitle, LgText} from './styles';
import { validationSchema } from './validation';


function Login() {
  const { SignIn, error } = useAuth();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema,
    onSubmit: async values => {
      await SignIn(values);
      history.push("/home");
    }
  });

  const AppError = useMemo(
    () => <Styled.Error>{error}</Styled.Error>, [error]
  );

  const ValidationLoginError = useMemo(
    () => <Styled.Error>{formik.errors.login}</Styled.Error>, [formik.errors.login]
  );
  const ValidationPasswordError = useMemo(
    () => <Styled.Error>{formik.errors.password}</Styled.Error>, [formik.errors.password]
  );

  return (
    <Styled.Container>
      <LoginBox
      >
        <LoginForm onSubmit={formik.handleSubmit}>
          <LgTitle>Login</LgTitle>
          <Form.Group >
            <Form.Label></Form.Label>
            <LoginInput
              id="login"
              name="login"
              placeholder="Digite seu e-mail"
              onChange={formik.handleChange}
              isValid={formik.touched.login && !formik.errors.login}
              isInvalid={formik.errors.login}
            />
            {ValidationLoginError}
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <LoginInput
              id="password"
              name="password"
              type="password"
              placeholder="Digite sua Senha"
              onChange={formik.handleChange}
              isValid={formik.touched.password && !formik.errors.password}
              isInvalid={formik.errors.password}
            />
            {ValidationPasswordError}
          </Form.Group> 
          {AppError}
          
          <LoginButton type="submit">Go!</LoginButton>
        </LoginForm>
        <LgText>Ainda não é um treinador Pokémon?</LgText>
        <LgText> <Link to="/register">Clique aqui</Link> 
        &nbsp;para iniciar sua jornada!
        </LgText>
      </LoginBox>
    </Styled.Container>
  );
}

export default Login;