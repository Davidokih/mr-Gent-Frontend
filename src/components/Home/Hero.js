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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
`;
const Image = styled.img``;