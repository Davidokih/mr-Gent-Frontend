import React from 'react';
import styled from 'styled-components';
// import Back from './Back';s
// import Contents from './Contents'
import Body from './Body';
import Hero from './Hero';

const Home = () => {
    return (
        <>
            <Container>
                <Hero />
                {/* <Back /> */ }
                <Body />
            </Container>

            {/* <Contents /> */ }
        </>
    );
};

export default Home;

const Container = styled.div`
    background-color: rgba(0,0,0,0.95);
    width: 100%;

    @media (max-width: 470px){
        width: 120%;
    }
    @media (max-width: 278px){
        width: 140%;
    }
`;
const Wrapper = styled.div`

    width: 80%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-image: url('/images/IMG-20220512-WA0004.jpg');
    background-position: center;
    background-repeat: no-repeat;

    color: #fff;

    h1{
        font-size: 40px;
        font-weight: 700;
    }

    p{
        text-align: center;
    }
`;