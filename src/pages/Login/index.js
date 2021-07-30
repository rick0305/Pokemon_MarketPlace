import React, { useMemo } from 'react';
import { Form, Button, ButtonGroup } from 'react-bootstrap';
import Container from '../../components/Container';
import { useFormik } from 'formik';
import { useAuth } from '../../hooks/context/AuthProvider';
import { useHistory } from 'react-router-dom';
import { Styled, LoginButton} from './styles';
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
      <Container
        title="Login"
        size="sm"
      >
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
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
            <Form.Control
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
        </Form>
      </Container>
    </Styled.Container>
  );
}

export default Login;