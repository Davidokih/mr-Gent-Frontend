import React from 'react';
import styled from 'styled-components';
import { AiTwotoneMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container>
            <h1>MrGents Wardrobe</h1>
            <Wrapper>
                <Holders>
                    <Holder1>
                        <Nav><GoLocation /> <p>Jimoh Ojora of Ojo Road</p></Nav>
                        <Nav><AiTwotoneMail /> <p>David@gmaail.come</p></Nav>
                        <Nav><FiPhoneCall /> <p>+2349162822742</p></Nav>
                    </Holder1>
                    <Holder2>
                        <Nav2>About</Nav2>
                        <Nav2>Contact</Nav2>
                        <Nav2>Collection</Nav2>
                    </Holder2>
                </Holders>
                <Holder3>
                    <span><FaFacebook /></span>
                    <span><FaInstagram /></span>
                    <span><FaTwitter /></span>
                </Holder3>
            </Wrapper>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
/* position: relative; */
    background-color: black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
`;
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 800px){
        flex-direction: column;
    }
`;
const Holders = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 400px;
     /* background-color: chartreuse; */
 `;
const Holder1 = styled.div`
    // flex: 0.5;
`;
const Nav2 = styled.div``;
const Nav = styled.div`
width: 190px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    p{
        margin-left: 10px;
    }
    /* background-color: red; */
`;
const Holder2 = styled.div`
    // width: 200px;
    /* margin-left: 20px; */
`;
const Holder3 = styled.div`
/* background-color: red; */
// flex: 0.5;
    width: 100px;
    display: flex;
    justify-content: space-between;
`;