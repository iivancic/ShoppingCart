import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaMinus } from "react-icons/fa";
import Sidebar from "./sidebar.component";
import { Item } from "../models/Item.model";
import {
    CursorPointer,
    ShopItem,
    ShoppingInfo,
    Div100h,
    ShoppingContainer,
    ShoppingItemsContainer
} from "../styles/styledComponents";

function ShoppingContainerComponent() {
    const [products, setProducts] = useState<Item[]>([]);
    const [num, setNum] = useState([0]);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        getItemsAsync();
    }, []);

    async function getItemsAsync() {
        await axios.get("data/products.json").then(response => {
            if (response && response.data && response.data.products) {
                setProducts(response.data.products);
            }
            const temp: number[] = new Array(
                response.data.products.length + 1
            ).fill(0);
            setNum(temp);
        });
    }
    const shoppingItems = products.map(product => {
        return (
            <ShopItem key={product.id}>
                <img src={product.image} />

                <ShoppingInfo>
                    Cijena: {product.price.amount} {product.price.currency}/
                    {product.price.measureUnit}
                    <div>
                        <CursorPointer>
                            <FaPlus
                                onClick={() => {
                                    const copy = [...num];
                                    copy[product.id] += 1;
                                    setNum(copy);
                                    setSum(
                                        Number(
                                            (
                                                sum + product.price.amount
                                            ).toFixed(2)
                                        )
                                    );
                                }}
                            />
                        </CursorPointer>
                        <Div100h>{num[product.id]}</Div100h>
                        <CursorPointer>
                            <FaMinus
                                onClick={() => {
                                    const copy = [...num];
                                    copy[product.id] > 0
                                        ? (copy[product.id] -= 1)
                                        : (copy[product.id] = 0);
                                    setNum(copy);
                                    sum - product.price.amount >= 0 &&
                                    num[product.id] > 0
                                        ? setSum(
                                              Number(
                                                  (
                                                      sum - product.price.amount
                                                  ).toFixed(2)
                                              )
                                          )
                                        : setSum(sum);
                                }}
                            />
                        </CursorPointer>
                    </div>
                </ShoppingInfo>
            </ShopItem>
        );
    });
    return (
        <ShoppingContainer>
            <ShoppingItemsContainer>{shoppingItems}</ShoppingItemsContainer>
            <Sidebar sum={sum} products={products} num={num}></Sidebar>
        </ShoppingContainer>
    );
}

export default ShoppingContainerComponent;
