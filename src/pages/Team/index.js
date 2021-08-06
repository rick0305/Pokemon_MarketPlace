import React from 'react';
import Footer from '../../components/Footer';
import { Styled } from './styles';
import { Row, Col, Card } from 'react-bootstrap';

function Team() {
  
  return (
    <div style={{overflowY: "scroll"}}>
        <Styled.Container>
          <Styled.Title>Time</Styled.Title>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card>
                <Styled.Image style={{marginTop: 25}} className="rounded-circle" src="https://avatars.githubusercontent.com/u/54814943?v=4"  alt="avatar" width="130" height="130"/>
                <Card.Body>
                  <Card.Title style={{fontWeight: 'bold'}}>Diego Cravo</Card.Title>
                  <Card.Text>
                    Quality Assurance Test Engineer at everis | Graduando em Análise e Desenvolvimento de Sistemas - Unit
                  </Card.Text>
                  <Card.Text>
                    <a href="https://www.linkedin.com/in/diegocravo/">Linkedin</a> | <a href="https://github.com/diegocravo">GitHub</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Styled.Image style={{marginTop: 25}} className="rounded-circle" src="https://avatars.githubusercontent.com/u/63914897?v=4" alt="avatar" width="130" height="130"/>
                <Card.Body>
                  <Card.Title style={{fontWeight: 'bold'}}>Keila Beatriz</Card.Title>
                  <Card.Text>
                    Graduanda em Análise e Desenvolvimento de Sistemas | Faculdade Senac
                  </Card.Text>
                  <Card.Text>
                    <a href="https://www.linkedin.com/in/keila-bvs/">Linkedin</a> | <a href="https://github.com/keila66">GitHub</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Styled.Image style={{marginTop: 25}} className="rounded-circle" src="https://avatars.githubusercontent.com/u/76274328?v=4" alt="avatar" width="130" height="130" />
                <Card.Body>
                  <Card.Title style={{fontWeight: 'bold'}}>Luis Henrique Cunha</Card.Title>
                  <Card.Text>
                    Graduando do sétimo período em Ciência da Computação pela UNIFG
                  </Card.Text>
                  <Card.Text>
                    <a href="https://www.linkedin.com/in/luiz-henrique-oliveira-da-cunha-b767a7191/">Linkedin</a> | <a href="https://github.com/godrick05">GitHub</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Styled.Image style={{marginTop: 25}} className="rounded-circle" src="https://avatars.githubusercontent.com/u/33784000?v=4" alt="avatar" width="130" height="130" />
                <Card.Body>
                  <Card.Title style={{fontWeight: 'bold'}}>Rebeca Gaia</Card.Title>
                  <Card.Text>
                    Full Stack Developer | Computer Engineering Student at CEFET-MG
                  </Card.Text>
                  <Card.Text>
                    <a href="https://www.linkedin.com/in/rebeca-gaia/">Linkedin</a> | <a href="https://github.com/reb-gaia">GitHub</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Styled.Container>
      <Footer />
    </div>
    
  )
}

export default Team;