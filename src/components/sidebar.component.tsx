import * as React from "react";
import { Sidebar } from "../styles/styledComponents";
import { GiShinyApple } from "react-icons/gi";
import { ListInfo } from "../models/listInfo.model";

function SidebarComponent({ sum, products, num }: ListInfo) {
    const ShoppingCart = products.map(product => {
        if (num[product.id] > 0) {
            return (
                <div key={product.id} style={{ margin: "10px" }}>
                    <GiShinyApple style={{ margin: "2px" }} />
                    {product.name} x {num[product.id]}.
                </div>
            );
        }
    });

    return (
        <Sidebar>
            U Vašoj košarici nalazi se:
            {ShoppingCart}
            <div>Ukupna cijena: {sum} kuna.</div>
        </Sidebar>
    );
}
export default SidebarComponent;
