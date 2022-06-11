import React from 'react';
import styled from 'styled-components';


const Display = () => {
    return (
        <Container>
            <Wrapper>
                <Hold>
                    <img src='/images/IMG-20220512-WA0013.jpg' />
                    <TextHold>
                        <Title>Title</Title>
                        <Content>Description</Content>
                    </TextHold>
                </Hold>
                <Hold>
                    <img src='/images/IMG-20220512-WA0017.jpg' />
                    <TextHold>
                        <Title>Title</Title>
                        <Content>Description</Content>
                    </TextHold>
                </Hold>
                <Hold>
                    <img src='/images/IMG-20220512-WA0022.jpg' />
                    <TextHold>
                        <Title>Title</Title>
                        <Content>Description</Content>
                    </TextHold>
                </Hold>
            </Wrapper>
        </Container>
    );
};


export default Display;


const Title = styled.div``;
const Content = styled.div``;
const TextHold = styled.div`
    text-align: center;
`;
const Container = styled.div`
    width: 100%;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 768px){
        flex-direction: column;
    }
`;
const Hold = styled.div`
    margin: 10px;
    img{
        width: 300px;
        height: 300px;
        border-radius: 5px;
    }
`;
