import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <Container>

            <Wrapper>
                <ImageHold>
                    <img src="/images/IMG-20220512-WA0014.jpg" />
                </ImageHold>

                <Hold>
                    <Line></Line>
                    <h1>About Us</h1>
                </Hold>

                <AboutUser>
                    We at Mr Gents we make our customer fill the good sensation of good cloths, for men.
                    We do both Traditional and English wears and also for business personal that fill left out wear make suite and other attires that will not be mensioned but you will see when you start exploring our platform,
                    You will be marvel by the greate designs of clothing you will see,
                    and for more check the footer for both our phone.
                </AboutUser>
            </Wrapper>
        </Container>
    );
};

export default About;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Wrapper = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
margin-top: 90px;

   
    p{
        text-align: center;
    }

    @media (max-width: 800px){
        flex-direction: column;
    }
`;
const ImageHold = styled.div`

    width: 400px;
    height: 350px;
    margin-bottom: 30px;

     img{
        width: 100%;
        height: 100%;
        /* height: 350px; */
    }
`;
const Hold = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        position: relative;
        bottom: 50px;
        background-color: #fff;
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 30px;
    }
`;
const AboutUser = styled.div`
    margin: 0;
    position: relative;
    bottom: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    font-size: 15px;
    text-align: center;
`;
const Line = styled.div`
    width: 370px;
    height: 3px;
    background-color: #000;
`;