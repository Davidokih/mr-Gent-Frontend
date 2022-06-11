import React, { useState } from 'react';
import styled from 'styled-components';
import Display from './Display';
import Displays from './Displays';
// import Back from './Back';

const Body = () => {

    const [ toggle, setToggle ] = useState(false);
    const [ toggle2, setToggle2 ] = useState(false);

    const change = () => {
        setToggle(!toggle);
    };

    const change2 = () => {
        setToggle2(!toggle2);
    };
    return (

        <>

            <Container>
                <h1>Collections</h1>
                <Wrapper>
                    <Holder>
                        <ImageHold>
                            <img src='/images/IMG-20220512-WA0019.jpg' />
                            <img src='/images/IMG-20220512-WA0015.jpg' />
                            {/* <img src='/images/IMG-20220512-WA0015.jpg' /> */ }
                        </ImageHold>
                        <TextDiv>
                            <Title>TRaditional Clothing</Title>
                            <Content>There are series of custom wears that bring Out the native looks in you.</Content>
                            <p onClick={ change }>See More...</p>
                        </TextDiv>
                        { toggle ? (<Display />) : null }
                    </Holder>
                    <Holder>
                        <TextDiv>
                            <Title>Suite and others</Title>
                            <Content>The a series of custom wears that bring Out the English looks in you.</Content>
                            <p onClick={ change2 }>See More...</p>
                        </TextDiv>
                        <ImageHold>
                            <img src='/images/IMG-20220512-WA0020.jpg' />
                            <img src='/images/download (5).jpg' />
                        </ImageHold>
                        { toggle2 ? (<Displays />) : null }
                    </Holder>
                    {/* <Holder2>
                    <img src='/images/IMG-20220512-WA0023.jpg' />
                </Holder2> */}
                </Wrapper>
            </Container>
            {/* <BackHold>
                <Back />
            </BackHold> */}
        </>
    );
};

export default Body;

const BackHold = styled.div`
    /* 
    
    top: 2000px; */
    z-index: 0;
    /* position: fixed; */
`;
const Container = styled.div`
font-family: Bodoni MT;
/* position: relative; */
    width: 100%;
    margin-top: 100px;
    display: flex;
    align-items: center;
    /* background-color: red; */
    justify-content: center;
    flex-direction: column;
    // z-index: 0;

    color: #fff;
`;
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        font-size: 40px;
        font-weight: 800;
    }
`;
const Holder = styled.div`
    width: 80%;
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
        flex-direction: column;
        /* flex-wrap: wrap; */

    background-color: black;

    /* ::before{
        content: "hello";
    } */
    @media (max-width: 1100px){
        width: 75%;
    }
`;
const ImageHold = styled.div`
    flex: 1;
    display: flex;

    img{
        width: 350px;
        height: 350px;
        margin: 5px;
        border-radius: 5px;
    }

    @media (max-width: 800px){
        flex-direction: column;
        flex: 0.5;
    }
`;
const TextDiv = styled.div`
    flex: 0.5;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    p{
        color: #D3B094;
        cursor: pointer;
    }
`;
const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
`;
const Content = styled.div`
    font-size: 15px;
    width: 250px;
    text-align: center;

    @media (max-width: 800px){
        text-align: center;
    }
`;
// const Holder2 = styled.div`

//     width: 100%;
//     @media (max-width: 800px){
//         img{
//             width: 100%;
//         }
//     }
// `;