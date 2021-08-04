import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Title
} from "./styles";

function Footer () {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <FooterLink href="#">Sobre nós</FooterLink>
            
          </Column>
          <Column>
            <FooterLink href="#">Equipe</FooterLink>
            
          </Column>
          <Column>
            <FooterLink href="#">Contatos</FooterLink>
            
          </Column>
        </Row>
      </Container>
      <Title>Todos os direitos reservados © - 2021</Title>
    </Box>
  );
};
export default Footer;
