import React from "react";

import { Container, NameText, UserPicture, Progress } from "./style";

const UserInfo = ({ nome, image, percentual }) => {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{nome}</NameText>
        <Progress
          percentual={percentual}
          image={"https://avatars.githubusercontent.com/u/76690908?s=96&v=4"}
        />
      </div>
    </Container>
  );
};

export { UserInfo };
