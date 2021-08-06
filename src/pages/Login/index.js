import React, { useMemo } from "react";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import { useAuth } from "../../hooks/context/AuthProvider";
import { useHistory, Link } from "react-router-dom";
import { Styled } from "./styles";
import { validationSchema } from "./validation";
import { YellowButton, CancelButton } from '../../components/Button';

function Login() {
  const { SignIn, error } = useAuth();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await SignIn(values);
      history.push("/home");
    },
  });

  const handleCancel = async () => {
    await history.push("/home");
  };

  const AppError = useMemo(() => <Styled.Error>{error}</Styled.Error>, [error]);

  const ValidationLoginError = useMemo(
    () => <Styled.Error>{formik.errors.login}</Styled.Error>,
    [formik.errors.login]
  );
  const ValidationPasswordError = useMemo(
    () => <Styled.Error>{formik.errors.password}</Styled.Error>,
    [formik.errors.password]
  );

  return (
    <Styled.Container>
      <Styled.LoginBox>
        <Styled.LoginForm onSubmit={formik.handleSubmit}>
          <Styled.LgTitle>Login</Styled.LgTitle>
          <Form.Group>
            <Form.Label></Form.Label>
            <Styled.LoginInput
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
            <Styled.LoginInput
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

          <YellowButton type="submit">Go!</YellowButton>
          <CancelButton onClick={handleCancel}>
            Cancelar
          </CancelButton>
        </Styled.LoginForm>
        <Styled.LgText>Ainda não é um treinador Pokémon?</Styled.LgText>
        <Styled.LgText>
          {" "}
          <Link to="/register">Clique aqui</Link>
          &nbsp;para iniciar sua jornada!
        </Styled.LgText>
      </Styled.LoginBox>
    </Styled.Container>
  );
}

export default Login;
