import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHighlight } from "./styles";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={80}
            nome="Marcela Silva"
            image="https://avatars.githubusercontent.com/u/85529043?v=4"
          />
          <UserInfo
            percentual={55}
            nome="Marcela Selva"
            image="https://avatars.githubusercontent.com/u/85529043?v=4"
          />
          <UserInfo
            percentual={35}
            nome="Marcela Salva"
            image="https://avatars.githubusercontent.com/u/85529043?v=4"
          />
          <UserInfo
            percentual={20}
            nome="Marcela Sulva"
            image="https://avatars.githubusercontent.com/u/85529043?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
