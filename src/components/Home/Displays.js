import React from 'react';
import styled from 'styled-components';

const Displays = () => {
    return (
        <Container>
            <Wrapper>
                <Hold>
                    <img src='/images (3).jpg' />
                    <TextHold>
                        <Title>Title</Title>
                        <Content>Description</Content>
                    </TextHold>
                </Hold>
                <Hold>
                    <img src='/images/images (1).jpg' />
                    <TextHold>
                        <Title>Title</Title>
                        <Content>Description</Content>
                    </TextHold>
                </Hold>
                <Hold>
                    <img src='/images/download (5).jpg' />
                    <TextHold>
                        <Title>Title</Title>
                        <Content>Description</Content>
                    </TextHold>
                </Hold>
            </Wrapper>
        </Container>
    );
};

export default Displays;

const Title = styled.div`
    z-index: 1;
`;
const Content = styled.div`
    z-index: 1;
`;
const TextHold = styled.div`
    text-align: center;

            /* transform: scaleY(0); */
    transform-origin: bottom;
    position: relative;

    

`;
const Container = styled.div`
    width: 100%;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

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

    :hover{
        transform: scale(1.1);
        transition: all 30ms;

        ${TextHold}{
            position: absolute;
            width: 300px;
            bottom: 5px;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            /* transform: scaleY(1); */
            transition: all 5s;

            ::before{
        content: "";
        position: absolute;
        width: 300px;
        height: 300px;
            background-color: rgba(0,0,0,0.8);

        transform: scaleY(0);
        z-index: 0;
        transform-origin: bottom;
        transition: all .7s ease;

        ${Title}{
            transition: all 2s;
        }
    }

    :hover::before{
        transform: scaleY(1);
    }
        }
    }
`;
