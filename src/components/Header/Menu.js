import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const menu = () => {
    return (
        <Container>
            <Wrapper id='Slide'>
                <Link to="/" style={ { textDecoration: "none", color: "#fff" } }><Nav>Home</Nav></Link>
                <Link to="/collection" style={ { textDecoration: "none", color: "#fff" } }><Nav>Collection</Nav></Link>
                <Link to="/about" style={ { textDecoration: "none", color: "#fff" } }><Nav>About</Nav></Link>
                <Nav>Contact</Nav>
                <button>Log In</button>
            </Wrapper>
        </Container>
    );
};

export default menu;

const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    position: absolute;
    justify-content: center;

    /* color: #fff;  */
`;
const Wrapper = styled.div`

    width: 300px;
    height: 100vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    line-height: 3;
    color: #fff;
    position: fixed;
    left: 0px;
    top: 5px;
    /* background-color: red; */

    button{
        width: 80px;
        height: 30px;
        border: 1px solid #000;
        background-color: transparent;
        /* color: #fff;  */
        cursor: pointer;
    }
`;
const Nav = styled.div`
    font-weight: 700;
    cursor: pointer;
`;