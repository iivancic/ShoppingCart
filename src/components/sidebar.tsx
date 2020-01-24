import * as React from "react";
import styled, { css } from "styled-components";

const Bar = styled.div`
  width: 10%;
  height: 100%;
  border-bottom: 1px solid palevioletred;
  margin: 0;
  background-color: black;
  color: white;
  padding: 0;
  margin: 0;
  right: 0;
  position: absolute;
  font-size: 30px;
`;

type card = {
  sum: number
}

export default ({sum}: card) => ( 
    <div>
      <Bar> So far, you have chosen items in the value of: {sum}</Bar>
    </div>
  );
};
