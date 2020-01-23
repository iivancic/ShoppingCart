import * as React from "react";
import * as ReactDOM from "react-dom";
import Layout from "./components/layout";
import styled, { css } from "styled-components";

const Div100h = styled.div`
  height: 100%;
`;

class App extends React.Component {
  render() {
    return (
      <Div100h>
        <Layout />
      </Div100h>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
