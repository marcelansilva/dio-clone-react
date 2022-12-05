import React from "react";
import { Button } from "../Button";
import {
  BuscarInputContainer,
  Row,
  Input,
  Container,
  Menu,
  MenuRight,
  UserPicture,
  Wrapper,
} from "./styles";

import logo from "../../assets/logo.png";
import { IHeader } from "./types";

const Header = ({ autenticado }: IHeader) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da DIO" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>{" "}
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/85529043?v=" />
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title={"Entrar"} />
              <Button title={"Cadastrar"} />{" "}
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
