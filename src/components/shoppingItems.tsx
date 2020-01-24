import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import axios from "axios";
import styled, { css } from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
import Sidebar from "./../components/sidebar";

interface Item {
  id: number;
  name: string;
  image: string;
  price: {
    amount: number;
    currency: string;
    measureUnit: string;
  };
}

interface Props {}

const Container = styled.div`
  font-size: 2vw;
  width: 100%;
  height: 100%;
  display: inline-table;
  position: absolute;
`;

const ShopItem = styled.div`
  height: 500px;
  width: 400px;
  border: 3px solid red;
  float: left;
  margin: 2%;
  img {
    max-height: 100%;
    max-width: 100%;
  }
`;

const ShoppingInfo = styled.div`
  height: 15%;
  width: 100%;
  background-color: black;
  color: white;
  display: inline-table;
  text-align: center;
  font-size: 1em;
`;

const Div100h = styled.div`
  height: 100%;
  overflow: auto;
  display: inline-table;
  position: relative;
  font-size: 1.4em;
  margin: 2%;
`;

function ShoppingItem() {
  const [products, setProducts] = useState<Item[]>([]);
  const [num, setNum] = useState([0]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    await axios.get("products.json").then(response => {
      if (response && response.data && response.data.products) {
        setProducts(response.data.products);
      }
      const temp: number[] = new Array(response.data.products.length + 1).fill(
        0
      );
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
            <FaPlus
              onClick={() => {
                const copy = [...num];
                copy[product.id] += 1;
                setNum(copy);
                setSum(Number((sum + product.price.amount).toFixed(2)));
              }}
            />
            <Div100h>{num[product.id]}</Div100h>
            <FaMinus
              onClick={() => {
                const copy = [...num];
                copy[product.id] > 0
                  ? (copy[product.id] -= 1)
                  : (copy[product.id] = 0);
                setNum(copy);
                sum - product.price.amount >= 0 && num[product.id] > 0
                  ? setSum(Number((sum - product.price.amount).toFixed(2)))
                  : setSum(sum);
              }}
            />
          </div>
        </ShoppingInfo>
      </ShopItem>
    );
  });
  return (
    <Container>
      {shoppingItems}
      <Sidebar sum={sum}></Sidebar>
    </Container>
  );
}

export default ShoppingItem;
