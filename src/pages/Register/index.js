import React, { useMemo, useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { Styled, PageContainer, ProfileButton, ProfileButtonAlt } from './styles';
import { validationSchema } from './validation';
import { useUser } from '../../hooks/context/UserProvider/index'
import { api } from '../../services/api'
import Swal from 'sweetalert2';


function CreateUser() {
  const history = useHistory();
  const [error, setError] = useState("");
  const { getUsers, postUsers, putUser } = useUser();
  
  const handleCancel = async () => {
    await 
    history.push("/login");
  };

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      name: "",
      gender: "",
      origin: "",
      work: "",
    },
    validationSchema,
    onSubmit: async ({login, password, name, gender, origin, work}) => {
      /* await postUsers(values); */
      try {
        await api.post('/users', {
          login, 
          password, 
          name, 
          gender, 
          origin, 
          work       
        });
        Swal.fire("Usuário cadastrado com sucesso");
        await
        history.push("/login");
      } catch (error) {
        setError("Erro ao cadastrar o usuario");
      }
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
    <PageContainer>
    <Styled.Container>
      <Styled.Title>Inicie sua jornada</Styled.Title>
      <Form onSubmit={formik.handleSubmit} style={{overflow: "visible"}}>
        <Col xs="auto">
        <Form.Group className="mb-2">
          <Styled.ProfileLabel>Login</Styled.ProfileLabel>
          <Styled.ProfileInput
            id="login"
            name="login"
            placeholder="Digite um login"
            onChange={formik.handleChange}            
            isValid={formik.touched.login && !formik.errors.login}
            isInvalid={formik.errors.login}
          />
          {ValidationLoginError}
        </Form.Group>

        <Form.Group className="mb-2">
          <Styled.ProfileLabel>Senha</Styled.ProfileLabel>
          <Styled.ProfileInput
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
        </Col>
        {/* <Row> */}
        <Col xs="auto">
            <Form.Group className="mb-2">
              <Styled.ProfileLabel>Nome Completo</Styled.ProfileLabel>
              <Styled.ProfileInput
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
          <Row className="align-items-center">
          <Col xs="auto">
            <Form.Group className="mb-2">
              <Styled.ProfileLabel>Sexo</Styled.ProfileLabel>
              <Styled.ProfileSelect
                id="gender"
                name="gender"
                onChange={formik.handleChange}            
                isValid={formik.touched.gender && !formik.errors.gender}
                isInvalid={formik.errors.gender}>
                  <Styled.ProfileOption>Selecione seu gênero</Styled.ProfileOption>
                  <Styled.ProfileOption value="male">Feminino</Styled.ProfileOption>
                  <Styled.ProfileOption value="female">Masculino</Styled.ProfileOption>
                  <Styled.ProfileOption value="others">Prefiro não responder</Styled.ProfileOption>
              </Styled.ProfileSelect>
              {ValidationGenderError}
            </Form.Group>
            </Col>
          <Col xs="auto">
            <Form.Group className="mb-2">
              <Styled.ProfileLabel>Origem</Styled.ProfileLabel>
              <Styled.ProfileSelect
                id="origin"
                name="origin"
                onChange={formik.handleChange}            
                isValid={formik.touched.origin && !formik.errors.origin}
                isInvalid={formik.errors.origin}>
                  <Styled.ProfileOption>Selecione sua origem</Styled.ProfileOption>
                  <Styled.ProfileOption value="kanto">Kanto</Styled.ProfileOption>
                  <Styled.ProfileOption value="johto">Johto</Styled.ProfileOption>
                  <Styled.ProfileOption value="hoenn">Hoenn</Styled.ProfileOption>
                  <Styled.ProfileOption value="sinnoh">Sinnoh</Styled.ProfileOption>
                  <Styled.ProfileOption value="unova">Unova</Styled.ProfileOption>
                  <Styled.ProfileOption value="kalos">Kalos</Styled.ProfileOption>
                  <Styled.ProfileOption value="sevil_islands">Sevil Islands</Styled.ProfileOption>
                  <Styled.ProfileOption value="ilhas_laranjas">Ilhas Laranjas</Styled.ProfileOption>
                  <Styled.ProfileOption value="regiao_alola">Região de Alola</Styled.ProfileOption>
                  <Styled.ProfileOption value="regiao_galar">Região de Galar</Styled.ProfileOption>
              </Styled.ProfileSelect>
              {ValidationOriginError}
            </Form.Group>
          </Col>
          </Row>
          <Col xs="auto">
            <Form.Group className="mb-2">
              <Styled.ProfileLabel>Função</Styled.ProfileLabel>
              <Styled.ProfileInput
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
        {AppError}
        <ProfileButton type="submit">
          Salvar
        </ProfileButton>{" "}
        <ProfileButtonAlt onClick={handleCancel}>
          Cancelar
        </ProfileButtonAlt>
      </Form> 
    </Styled.Container>
    </PageContainer>
  );
}

export default CreateUser;