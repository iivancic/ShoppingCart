import * as React from "react";
import * as ReactDOM from "react-dom";
import LayoutComponent from "./components/layout.component";
import { Div100Height } from "./styles/styledComponents";

class App extends React.Component {
    render() {
        return (
            <Div100Height>
                <LayoutComponent />
            </Div100Height>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
