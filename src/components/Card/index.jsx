import React from "react";
import { FiThumbsUp } from "react-icons/fi";

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./style";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="http://res.cloudinary.com/assemany/image/upload/v1502152400/JavaScript_gdcbwg.png" />
      <Content>
        <UserInfo>
          <UserPicture
            src="https://avatars.githubusercontent.com/u/76690908?s=96&v=4"
            alt="foto perfil"
          />
          <div>
            <h4>Luana Fernanda</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeito feito para o curso de HTML e CSS no bootcamp dio global
            Orange Tech+... <strong> Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
