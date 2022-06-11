import React from 'react';
import styled from 'styled-components';

const Back = () => {
    return (
        <Container>
            <Wrappers>
                <img src='/images/IMG-20220512-WA0009.jpg' />
                {/* <img src='/images/IMG-20220512-WA0009.jpg' /> */ }
            </Wrappers>
        </Container>
    );
};

export default Back;

const Wrappers = styled.div`
    position: fixed;
    width: 100%;
    /* z-index: 0; */
    /* background-color: red; */
    img{
        width: 100%;
        height:50%;
        object-fit: contain;
    }
`;
const Container = styled.div`
    width: 100%;
    height: 500px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;