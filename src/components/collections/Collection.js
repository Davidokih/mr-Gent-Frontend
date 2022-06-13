import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const Collection = () => {

    // const dispatch = useDispatch();
    const product = useSelector((state) => state.persistedReducer.product);
    // const user = useSelector((state) => state.persistedReducer.user);
    const sliderChange = [
        {
            id: 1,
            image: require('../images/IMG-20220512-WA0004.jpg')
        },
        {
            id: 2,
            image: require('../images/IMG-20220512-WA0005.jpg')
        },
        {
            id: 3,
            image: require('../images/IMG-20220512-WA0006.jpg')
        },
        {
            id: 4,
            image: require('../images/IMG-20220512-WA0007.jpg')
        },
        {
            id: 5,
            image: require('../images/IMG-20220512-WA0008.jpg')
        },
    ];
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCount((el) => el + 1);
        }, 3000);
    }, []);
    console.log(count);

    return (
        <Container>
            <Hero>
                <Image src={ sliderChange[ count % sliderChange.length ].image } />
            </Hero>
            <Wrapper>
                <h1>All Categoryes</h1>
                { product?.map((props) => {
                    return (
                        <General key={ props._id }>
                            <Holder>
                                <ImageHold>
                                    {/* <img src={ props.avatar } /> */ }
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

        /* @media (max-width: 300px) */
    }
`;

const General = styled.div`
width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    /* background-color: red; */


    @media (max-width:800px){
        width: 100%;
        flex-direction: column;
    }
`;
const Holder = styled.div`
    width: 280px;
    height: 430px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;

    margin: 10px;

    @media (max-width: 300px){
        width: 250px;
    }
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
