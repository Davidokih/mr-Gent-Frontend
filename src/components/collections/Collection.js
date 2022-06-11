import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const Collection = () => {

    // const dispatch = useDispatch();
    const product = useSelector((state) => state.persistedReducer.product);
    // const user = useSelector((state) => state.persistedReducer.user);

    return (
        <Container>
            <Hero>
                <Image src="/images/IMG-20220512-WA0017.jpg" />
            </Hero>
            <Wrapper>
                <h1>Traditional Clothing</h1>
                { product?.map((props) => {
                    return (
                        <General>
                            <Holder>
                                <ImageHold>
                                    <img src={ props.avatar } />
                                </ImageHold>
                                <Hold>
                                    <Title>{ props.title }</Title>
                                    <Content>{ props.content }</Content>
                                </Hold>
                            </Holder>
                        </General>
                    );
                }) }
            </Wrapper>
        </Container>
    );
};

export default Collection;


const Container = styled.div`
    width: 100%;
    height: 100%;

    min-height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(0,0,0,0.95);

    /* margin-top: 50px; */
`;
const Image = styled.img`
    width: 95%;
    height: 97%;
`;
const Hero = styled.div`
    width: 100%;
    height: 550px;
    background-color: rgba(0,0,0,0.9);
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    margin-top: 50px; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        color: #fff;
    }
`;

const General = styled.div`
width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width:800px){
        width: 90%;
        flex-direction: column;
    }
`;
const Holder = styled.div`
    width: 280px;
    height: 430px;
    /* background-color: red; */

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;

    margin: 10px;
`;
const ImageHold = styled.div`
    width: 100%;
    height: 70px;

    background-color: #000;
    display: flex;
    /* align-items: center; */
    justify-content: center;
     img{
        width: 250px;
        height: 350px;
        border-radius: 1px;
        margin: 10px;
        position: relative;
    }
`;
const Hold = styled.div`
    display: flex;
    width: 100%;
    height: 270px;
    background-color: #000;
    justify-content: center;
    /* align-items: flex-end; */
    flex-direction: column;
    color: #fff;
    line-height: 1.5;
`;
const Title = styled.div`
    text-align: center;
    margin-top: 200px;
    font-size: 20px;
    font-weight: 700;
`;
const Content = styled.div`
    text-align: center;
    font-size: 13px;
    margin-bottom: 10px;
`;
