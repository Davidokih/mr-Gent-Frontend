import React, { useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom'
import SignIn from './SignIn';
import SignUp from './SignUp';

const InUp = () => {

    const [ route, setRoute ] = useState(false);
    const Change = () => {
        setRoute(!route);
    };
    return (
        <Container>
            <Wrapper>
                <Card1>
                    <p>This route is ment mainly for the admins and nobody else.</p>
                </Card1>
                <Card2>
                    <Spans>
                        { route ? (
                            <div><button>SignIn</button>
                                <button onClick={ Change }>SignUp</button></div>) : (<div>
                                    <button onClick={ Change }>SignIn</button>
                                    <button>SignUp</button>
                                </div>) }
                    </Spans>
                    <Box>
                        { route ? (<SignIn />) : (<SignUp />) }
                    </Box>
                </Card2>
            </Wrapper>
        </Container>
    );
};

export default InUp;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("/pexels-charan-sai-2874998.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 200%;
    background-color: rgba(0,0,0,0.95);
`;
const Wrapper = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Card1 = styled.div`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: white;
    height: 536px;

    p{
        text-align: center;
        width: 350px;
    }

    @media (max-width: 800px) {
        display: none;
    }
`;
const Box = styled.div`
    width: 400px;
    height: 500px;
    /* background-color: red; */
`;
const Card2 = styled.div`
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: linear-gradient(360deg, gold,black); */
    flex-direction: column;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    /* position: relative; */

    @media (max-width: 800px) {
        border-radius: 10px;
    }
`;
const Spans = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    margin: 10px;
    width: 100%;


    div{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* background-color: red; */
        
        button{
            color: white;
            font-weight: 800;
            background-color: transparent;
            border: none;
            cursor: pointer;
            /* width: 20px; */
            /* height: 60px; */
            width: 60px;
            flex: 1;

            :focus{
                border-bottom: 1px solid gold;
            }
        }
    }
`;
