import * as React from "react";
import styled, { css } from "styled-components";

const Sidebar = styled.div`
  width: 10%;
  height: 100%;
  border-bottom: 1px solid palevioletred;
  margin: 0;
  background-color: black;
  color: white;
  padding: 0;
  margin: 0;
  float: right;
`;

export default () => {
  return <Sidebar>This is a nice Sidebar ^.^</Sidebar>;
};
