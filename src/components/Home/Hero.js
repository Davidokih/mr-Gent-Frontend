import React from 'react';
import styled from 'styled-components';
import { Svg } from '../MySvg/Svg';

const Hero = () => {
    return (
        <Container>
            <Image src='/images/IMG-20220512-WA0004.jpg' />
            {/* <img src={ Svg } /> */ }
        </Container>
    );
};

export default Hero;

const Container = styled.div`
    /* width: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;

    @media (max-width: 450px){
        /* width: 100vw; */
        flex: 1;
    }
`;
const Image = styled.img`

    @media (max-width: 450px){
        width: 100%;
    }
`;