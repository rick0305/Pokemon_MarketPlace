import React, { useMemo } from 'react';
import { useFormik } from 'formik';
import { Form, Col, Row} from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Styled, ProfileButton, ProfileButtonAlt  } from './styles';
import { useRegister } from '../../hooks/context/RegisterProvider';
import { validationSchema } from './validation';

function EditUser() {
  const history = useHistory();
  const { id } = useParams()
  const { state } = useLocation()
  const { error, putUser } = useRegister();

  const handleCancel = async () => {
    await 
    history.push("/");
  };

  const formik = useFormik({
    initialValues: {
      login: state ? state.users.login : "",
      password: state ? state.users.password : "",
      name: state ? state.users.name : "",
      gender: state ? state.users.gender : "",
      origin: state ? state.users.origin : "",
      work: state ? state.users.work : "",
    },
    validationSchema,
    onSubmit: async (values) => {      
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
    <Styled.Container>
      <Styled.Title>Meu perfil</Styled.Title>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Styled.ProfileLabel>Login</Styled.ProfileLabel>
          <Styled.ProfileInput
            id="login"
            name="login"
            placeholder="Insira seu novo login"
            onChange={formik.handleChange}            
            isValid={formik.touched.login && !formik.errors.login}
            isInvalid={formik.errors.login}
            value={formik.values.login}
          />
          {ValidationLoginError}
        </Form.Group>

        <Form.Group className="mb-3">
          <Styled.ProfileLabel>Senha</Styled.ProfileLabel>
          <Styled.ProfileInput
            id="password"
            name="password"
            type="password"
            placeholder="Insira sua nova senha"
            onChange={formik.handleChange}
            isValid={formik.touched.password && !formik.errors.password}
            isInvalid={formik.errors.password}        
            value={formik.values.password}
          />
          {ValidationPasswordError}
        </Form.Group>
        <Row>
          <Col xs={7}>
            <Form.Group className="mb-3">
              <Styled.ProfileLabel>Nome Completo</Styled.ProfileLabel>
              <Styled.ProfileInput
                id="name"
                name="name"
                placeholder="Insira o seu nome"
                onChange={formik.handleChange}
                isValid={formik.touched.name && !formik.errors.name}
                isInvalid={formik.errors.name}
                value={formik.values.name}
              />
              {ValidationNameError}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Styled.ProfileLabel>Sexo</Styled.ProfileLabel>
              <Styled.ProfileSelect
                id="gender"
                name="gender"
                onChange={formik.handleChange}            
                isValid={formik.touched.gender && !formik.errors.gender}
                isInvalid={formik.errors.gender}
                value={formik.values.gender}  
                >
                  <option>Selecione seu gênero</option>
                  <option value="male">Masculino</option>
                  <option value="female">Feminino</option>
                  <option value="others">Prefiro não responder</option>
              </Styled.ProfileSelect>
              {ValidationGenderError}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Styled.ProfileLabel>Origem</Styled.ProfileLabel>
              <Styled.ProfileInput
                id="origin"
                name="origin"
                type="text"
                placeholder="Insira sua origem"
                onChange={formik.handleChange}
                isValid={formik.touched.origin && !formik.errors.origin}
                isInvalid={formik.errors.origin}    
                value={formik.values.origin}      
              />
              {ValidationOriginError}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Styled.ProfileLabel>Função</Styled.ProfileLabel>
              <Styled.ProfileInput
                id="work"
                name="work"
                placeholder="Insira sua função"
                onChange={formik.handleChange}
                isValid={formik.touched.work && !formik.errors.work}
                isInvalid={formik.errors.work}
                value={formik.values.work}
              />
              {ValidationWorkError}
            </Form.Group>
          </Col>
        </Row>     
        {AppError}
        <ProfileButton type="submit">
          Salvar
        </ProfileButton>{" "}
        <ProfileButtonAlt onClick={handleCancel}>
          Cancelar
        </ProfileButtonAlt>
      </Form> 
    </Styled.Container>
      
  );
}

export default EditUser;