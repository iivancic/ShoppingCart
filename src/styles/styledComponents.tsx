import styled, { css } from "styled-components";

export const MainContainer = styled.div`
    height: 100%;
    width: 100%;
`;

export const Header = styled.div`
    height: 50px;
    background-color: #19334d;
    color: white;
    font-size: 3vw;
`;

export const ShoppingContainer = styled.div`
    font-size: 2vw;
    width: 100%;
    height: 100%;
    display: flex;
`;

export const ShoppingItemsContainer = styled.div`
    display: inline-block;
    width: 85%;
    height: 100%;
    background-color: #eaeaea;
    padding: 15px;
    overflow: auto;
`;

export const Sidebar = styled.div`
    width: 15%;
    height: 100%;
    background-color: #006699;
    color: white;
    display: inline-block;
    font-size: 24px;
    padding: 15px;
`;

export const CursorPointer = styled.span`
    cursor: pointer;
`;

export const Div100Height = styled.div`
    height: 100%;
`;

export const ShopItem = styled.div`
    height: 550px;
    background-color: white;
    width: 400px;
    display: inline-block;
    margin: 2%;
    border: 3px solid black;
    img {
        max-height: 100%;
        max-width: 100%;
    }
`;

export const ShoppingInfo = styled.div`
    color: black;
    text-align: center;
    font-size: 80%;
`;

export const Div100h = styled.div`
    height: 100%;
    overflow: auto;
    display: inline-table;
    position: relative;
    font-size: 1.4em;
    margin: 2%;
`;
