import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

export const UserPicture = styled.img`
  width: 32px;
  heigth: 32px;
  border-radius: 22px;
  border: 3px solid #ffffff;
  margin-rigth: 12px;
`;

export const NameText = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-heigth:25px;
  color #ffffff;
`;

export const Progress = styled.div`
  width: 180px;
  heigth: 6px;
  background-color: #ffffff;
  border-radius: 3px;
  position: relative;

  &:: after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ percentual }) => percentual}%;
    height: 6px;
    border-radius: 3px;
    background-color: #23dd7a;
  }
`;
