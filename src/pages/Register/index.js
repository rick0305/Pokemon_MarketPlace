import React, { useMemo, useEffect } from 'react';
import { useFormik } from 'formik';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Styled } from './styles';
import { useRegister } from '../../hooks/context/RegisterProvider';
import { validationSchema } from './validation';

function CreateUser() {
  const history = useHistory();
  const { id } = useParams()
  const { state } = useLocation()
  const { error, postUser, putUser } = useRegister();

  useEffect(() => {
    console.log(state);
  });

  const formik = useFormik({
    initialValues: {
      login: state ? state.usuarios.login : "",
      password: state ? state.usuarios.password : "",
      name: state ? state.usuarios.name : "",
      gender: state ? state.usuarios.gender : "",
      origin: state ? state.usuarios.origin : "",
      work: state ? state.usuarios.work : "",
    },
    validationSchema,
    onSubmit: async (values) => {
      if(!!id) {
        await putUser({
          id,
          login: values.login,
          password: values.password,
          name: values.name,
          gender: values.gender,
          origin: values.origin,
          work: values.work,
        });
        history.push("/home");
        return
      }
      console.log("teste", values);
      await postUser(values);
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

  const ValidationNameError = useMemo(
    () => <Styled.Error>{formik.errors.name}</Styled.Error>, [formik.errors.name]
  );

  const ValidationGenderError = useMemo(
    () => <Styled.Error>{formik.errors.gender}</Styled.Error>, [formik.errors.gender]
  );

  const ValidationOriginError = useMemo(
    () => <Styled.Error>{formik.errors.origin}</Styled.Error>, [formik.errors.origin]
  );

  const ValidationWorkError = useMemo(
    () => <Styled.Error>{formik.errors.work}</Styled.Error>, [formik.errors.work]
  );

  return (
    <>
    <Styled.Container>
      <Styled.Title>Inicie sua jornada</Styled.Title>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Login</Form.Label>
          <Form.Control
            id="login"
            name="login"
            placeholder="Digite um login"
            onChange={formik.handleChange}            
            isValid={formik.touched.login && !formik.errors.login}
            isInvalid={formik.errors.login}
          />
          {ValidationLoginError}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            placeholder="Digite uma senha"
            onChange={formik.handleChange}
            isValid={formik.touched.password && !formik.errors.password}
            isInvalid={formik.errors.password}          
          />
          {ValidationPasswordError}
        </Form.Group>
        <Row>
          <Col xs={7}>
            <Form.Group className="mb-3">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control
                id="name"
                name="name"
                placeholder="Coloque o seu nome completo"
                onChange={formik.handleChange}
                isValid={formik.touched.name && !formik.errors.name}
                isInvalid={formik.errors.name}
              />
              {ValidationNameError}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Sexo</Form.Label>
              <Form.Select 
                id="gender"
                name="gender"
                onChange={formik.handleChange}            
                isValid={formik.touched.gender && !formik.errors.gender}
                isInvalid={formik.errors.gender}>
                  <option>Selecione seu gênero</option>
                  <option value="male">Feminino</option>
                  <option value="female">Masculino</option>
                  <option value="others">Prefiro não responder</option>
              </Form.Select>
              {ValidationGenderError}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Origem</Form.Label>
              <Form.Control
                id="origin"
                name="origin"
                type="text"
                placeholder="Coloque sua origem"
                onChange={formik.handleChange}
                isValid={formik.touched.origin && !formik.errors.origin}
                isInvalid={formik.errors.origin}          
              />
              {ValidationOriginError}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Função</Form.Label>
              <Form.Control
                id="work"
                name="work"
                placeholder="Coloque sua função"
                onChange={formik.handleChange}
                isValid={formik.touched.work && !formik.errors.work}
                isInvalid={formik.errors.work}
              />
              {ValidationWorkError}
            </Form.Group>
          </Col>
        </Row>     
        {AppError}
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form> 
    </Styled.Container>
    </>    
  );
}

export default CreateUser;