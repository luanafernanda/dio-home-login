import React from "react";
import { Button } from "../Button";
import logo from "../../assets/logo-dio.png";
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./style";

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado
            ? true(
                <>
                  <BuscarInputContainer>
                    <Input placeholder="Buscar..." />
                  </BuscarInputContainer>
                  <Menu>Live Code</Menu>
                  <Menu>Global</Menu>
                </>
              )
            : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/76690908?s=96&v=4" />
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
