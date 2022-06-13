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
                    <Hold>
                        <span><FaFacebook size="20px" /></span>
                        <span><FaInstagram size="20px" /></span>
                        <span><FaTwitter size="20px" /></span>
                    </Hold>

                    <p>Copy right by David Okih</p>

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

    /* @media (max-width: 470px){
        width: 120%;
    } */
    /* @media (max-width: 320px){
        width: 140%;
    } */
`;
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 700px){
        flex-direction: column;
       /* flex: 1; */
        /* width: 60%; */
    }
    @media (max-width: 400px){
        flex-direction: column;
       /* flex: 1; */
        width: 60%;
    }

    p{
        color: #aaa;
    }
`;
const Holders = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 400px;
     /* background-color: chartreuse; */

     @media (max-width: 400px){
         flex-direction: column;
         width: 8%;

         /* justify-content: center; */
     }
 `;
const Holder1 = styled.div`
    /* flex: 0.7; */
    /* background-color: chartreuse; */

    /* @media (max-width: 400px){
        width: 300px;
    } */
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

    /* @media (max-width: 400px){
        width: 200px;
    } */
`;
const Holder2 = styled.div`
    // width: 200px;
    /* margin-left: 20px; */
`;
const Holder3 = styled.div`
/* background-color: red; */
// flex: 0.5;
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    flex-direction: column;

    @media (max-width: 700px){
        align-items: center;
        /* justify-content: center; */
    }
`;
const Hold = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
`;