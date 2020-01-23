import * as React from "react";
import styled, { css } from "styled-components";

const Header = styled.div`
  height: 3vw;
  width: 100%;
  border-bottom: 1px solid palevioletred;
  margin: 2%;
  background-color: black;
  color: white;
  padding: 0;
  margin: 0;
`;

export default () => {
  return <Header>This is a nice header ^.^</Header>;
};
