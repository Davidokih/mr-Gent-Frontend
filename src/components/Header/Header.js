import React, { useState } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { signOut } from '../Global/GlobalState';
import { Link } from 'react-router-dom';
// import Menu from './Menu';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.persistedReducer.user);

    const [ bar, setBar ] = useState(false);
    const [ state, setState ] = useState(false);

    const menuBar = () => {
        setBar(!bar);
    };
    return (
        <>
            <Container>
                <Wrapper>
                    <Logo>MrGents</Logo>
                    <Holder>
                        <Link to="/" style={ { textDecoration: "none", color: "#cdcdcd" } }><span>Home</span></Link>
                        <Link to='/collecttion' style={ { textDecoration: "none" } }><span>Collection</span></Link>
                        <Link to='/about' style={ { textDecoration: "none", color: "#cdcdcd" } }><span>About Us</span></Link>
                        <span>Contact Us</span>
                        { user ? <Link to="/upload" style={ { textDecoration: "none" } }><span>Upload</span></Link> : null }
                        <Link to='/signUp' style={ { textDecoration: "none", color: "#cdcdcd" } }><button onClick={ () => {
                            dispatch(signOut());
                        } }>Log In</button></Link>

                    </Holder>

                    <Icon>
                        <GiHamburgerMenu id='bars' size="40px" onClick={ () => {
                            document.getElementById('Slide').style.top = '0px';
                            document.getElementById('bars').style.display = 'none';
                            document.getElementById('cancle').style.display = 'block';
                        } } /> <GiCancel id='cancle' size="40px" onClick={ () => {
                            document.getElementById('Slide').style.top = '700px';
                            document.getElementById('bars').style.display = 'block';
                            document.getElementById('cancle').style.display = 'none';
                        } } style={ { display: "none" } } />
                    </Icon>
                </Wrapper>
                <div>{ user ? <ImageHold>
                    <img src={ user.avatar } />
                </ImageHold> : null }</div>
            </Container>

            <Slide id='Slide'>
                <Logo>MrGents</Logo>
                <Link to="/" style={ { textDecoration: "none", color: "#fff" } }><Nav>Home</Nav></Link>
                <Link to="/collecttion" style={ { textDecoration: "none", color: "#fff" } }><Nav>Collection</Nav></Link>
                <Link to="/about" style={ { textDecoration: "none", color: "#fff" } }><Nav>About</Nav></Link>
                <Nav>Contact</Nav>
                { user ? <Link to="/upload"><Nav>Upload</Nav></Link> : null }
                <Link to='/signUp' style={ { textDecoration: "none", color: "#fff" } }><Nav>Log In</Nav></Link>
            </Slide>
        </>
    );
};

export default Header;

const ImageHold = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;

    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        
    }
`;
const Collect = styled.div`
    /* border: 1px solid gray; */
    cursor: pointer;
    width: 100%;
    /* height: 100%; */
`;
const Display = styled.div`
    color: #000;
    width: 170px;
    height: 70px;
    background-color: #fff;

    position: absolute;
    top: 50px;
    left: 45%;
    right: 50%;
    /* border: 1px solid gray; */
    /* border-radius: 10px; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    /* line-height: 2; */
`;
const Nav = styled.div`
    padding: 10px 10px;
	font-size: 1.3rem;
	text-decoration: none;
	color: #fff;
	display: block;
    text-align: center;
	/* font-size: 1.4rem; */
	transition: all 0.3s linear;
	position: relative;

    /* THIS IS TO CREATE A FLOAT LEFT WAVE */
    ::before{
        content: "";
        position: absolute;
	top: 0;
	left: -5%;
	width: 100%;
	height: 100%;
	background: #222;
	border-radius: 25px;
	z-index: -1;
	transform: scaleX(0);
	transform-origin: center;

    transition: all .7s ease;
    }

    :hover::before{
        transform: scaleX(1);
        background-color: white;
        transition: all 350ms;
	    border-radius: 2px;
    }

    :hover{
        color: black;
    }
`;
const Slide = styled.div`
    overflow: hidden;
        width: 300px;
    height: 100vh;
    background-color: rgba(0,0,0,0.9);
    display: flex;
    flex-direction: column;
    line-height: 3;
    color: #fff;
    position: fixed;
    left: 0px;
    top: 700px;
    transition: all 2s;
    z-index: 1;

    /* ::before{
        content: "";
        color: #fff;
    } */
`;
const Container = styled.div`
/* position: fixed; */
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: #cbad93;
    z-index: 1;

    /* position: sticky; */

    /* ::before{
        content: "hello";
        position: absolute;
        top: 0;
        bottom: 10px;
        z-index: -1;
        background-color: red;
        width: 100%;

        transform: scale(0);
        transform-origin: center;
        transition: all .7s ease;
    }

    :hover::before{
        transform: scale(1);
        transform: scaleZ(1);
    } */
`;
const Wrapper = styled.div`
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.div`
    font-size: 30px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Darling in paris;
`;
const Holder = styled.div`
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: red; */

    span{
        font-size: 20px;
        font-weight: 700;
        color: #cdcdcd;
        cursor: pointer;
        /* z-index: -1; */
        /* position: relative; */

        

        ::before{
            content: " ";
            position: absolute;
            /* background-color: red; */
            height: 30px;

            border-bottom: 1px solid gold;
            width: 50px;
            margin-left: 2px;
            /* z-index: -1; */
            transform: scaleX(0);
            transform-origin: left;
            transition: all .7s ease;
        }

        :hover::before{
            transform: scaleX(1);
            /* border-bottom: 1px solid gold; */
        }
    }

    button{
        border: 1px solid #cdcdcd;
        outline: none;
        background-color: transparent;
        color: #fff;
        width: 80px;
        height: 30px;
        border-radius: 30px;
        cursor: pointer;
    }

    @media (max-width: 800px){
        display: none;
    }
`;
const Icon = styled.div`
    display: none;
    cursor: pointer;
    @media (max-width: 800px){
        display: block;
      
        :active{
            color: #235b9b;
        }
    }
`;