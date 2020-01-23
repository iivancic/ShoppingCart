import * as React from "react";
import ShoppingItem from "./shoppingItems";
import Header from "./header";
import Sidebar from "./sidebar";
import styled, { css } from "styled-components";

export interface LayoutProps {}

const Div100h = styled.div`
  height: 100%;
`;

export default class Layout extends React.Component<LayoutProps, {}> {
  render() {
    return (
      <Div100h>
        <Header />
        <Sidebar />
        <ShoppingItem />
      </Div100h>
    );
  }
}
