import React from "react";
import { Button } from "../Button";
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
} from "./style";
///*<img src={} alt="Logo da dio" />*/ linha 19
const Header = () => {
  <Wrapper>
    <Container>
      <Row>
        <BuscarInputContainer>
          <Input placeholder="Buscar..." />
        </BuscarInputContainer>
        <Menu>Live Code</Menu>
        <Menu>Global</Menu>
      </Row>
      <Row>
        <MenuRight href="#">Home</MenuRight>
        <Button title="Entrar" />
        <Button title="Cadastrar" />
      </Row>
    </Container>
  </Wrapper>;
};
