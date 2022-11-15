import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-itens: center;
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weigth: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 20px;
  line-heigth: 44px;
  color: #ffffff;
`;
export const TitleHighlight = styled.span`
  color: #e4105d;
`;

export const TextContent = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weigth: 400;
  font-size: 16px;
  width: 420px;
  margin-bottom: 20px;
  line-heigth: 22px;
  color: #ffffff;
`;
