import * as React from "react";
import ShoppingContainerComponent from "./shoppingContainer.component";
import HeaderComponent from "./header.component";
import { MainContainer } from "../styles/styledComponents";

function LayoutComponent() {
    return (
        <MainContainer>
            <HeaderComponent />
            <ShoppingContainerComponent />
        </MainContainer>
    );
}

export default LayoutComponent;
