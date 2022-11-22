import { Link } from "react-router-dom";
import bannerImage from "../../assets/banner.png";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Card } from "../../components/Feed";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, Title, TitleHighlight } from "./style";

const Feed = () => {
  return (
    <>
      <Header autenticado={"true"} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={94}
            nome={"Luana Fernanda"}
            image={"https://avatars.githubusercontent.com/u/76690908?s=96&v=4"}
          />
          <UserInfo
            percentual={27}
            nome={"Luana Fernanda"}
            image={"https://avatars.githubusercontent.com/u/76690908?s=96&v=4"}
          />
          <UserInfo
            percentual={69}
            nome={"Luana Fernanda"}
            image={"https://avatars.githubusercontent.com/u/76690908?s=96&v=4"}
          />
          <UserInfo
            percentual={62}
            nome={"Luana Fernanda"}
            image={"https://avatars.githubusercontent.com/u/76690908?s=96&v=4"}
          />
          <UserInfo
            percentual={55}
            nome={"Luana Fernanda"}
            image={"https://avatars.githubusercontent.com/u/76690908?s=96&v=4"}
          />
          <UserInfo
            percentual={64}
            nome={"Luana Fernanda"}
            image={"https://avatars.githubusercontent.com/u/76690908?s=96&v=4"}
          />
          <UserInfo
            percentual={38}
            nome={"Luana Fernanda"}
            image={"https://avatars.githubusercontent.com/u/76690908?s=96&v=4"}
          />
          <UserInfo
            percentual={58}
            nome={"Luana Fernanda"}
            image={"https://avatars.githubusercontent.com/u/76690908?s=96&v=4"}
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
