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
            <FooterLink href="/history">História</FooterLink>
            
          </Column>
          <Column>
            <FooterLink href="/team">Equipe</FooterLink>
            
          </Column>
          <Column>
            <FooterLink href="/contact">Contatos</FooterLink>
            
          </Column>
        </Row>
      </Container>
      <Title>Todos os direitos reservados © - 2021</Title>
    </Box>
  );
};
export default Footer;
