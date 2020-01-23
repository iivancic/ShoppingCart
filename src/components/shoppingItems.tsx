import * as React from "react";
import * as ReactDOM from "react-dom";
import axios from "axios";
import styled, { css } from "styled-components";

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

interface State {
  products: Item[];
}
interface Props {}

const Container = styled.div`
  display: inline-block;
  font-size: 2vw;
  width: 90%;
`;

const ShopItem = styled.div`
  height: 15%;
  width: 25%;
  border: 1px solid palevioletred;
  float: left;
  margin: 2%;

  img {
    max-height: 100%;
    max-width: 100%;
  }
`;

class ShoppingItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { products: [] };
  }
  componentDidMount() {
    this.getItems();
  }
  getItems = () => {
    let items = axios
      .get("products.json")
      .then(response => this.setState({ products: response.data.products }));
  };

  render() {
    const shoppingItems = this.state.products.map(product => {
      return (
        <ShopItem key={product.id}>
          <img src={product.image} />
          <div>
            Cijena: {product.price.amount} {product.price.currency}/
            {product.price.measureUnit}
          </div>
        </ShopItem>
      );
    });

    return <Container>{shoppingItems}</Container>;
  }
}

export default ShoppingItem;
