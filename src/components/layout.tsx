import * as React from "react";
import ShoppingItem from "./shoppingItems";
import Header from "./header";
import styled, { css } from "styled-components";

export interface LayoutProps {}

const Div100h = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  display: inline-table;
  position: relative;
`;

export default class Layout extends React.Component<LayoutProps, {}> {
  render() {
    return (
      <Div100h>
        <Header />
        <ShoppingItem />
      </Div100h>
    );
  }
}
