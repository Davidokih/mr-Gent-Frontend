import React from 'react';
import styled from 'styled-components';
import { SiGoogle } from 'react-icons/si';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <Container>
            <Left>
                <LogoHold>
                    <Logo></Logo>
                    <Text>.<span>P</span>idgin</Text>
                </LogoHold>
            </Left>
            <Right>
                <NewHold>
                    <Logo></Logo>
                    <Text>.<span>P</span>idgin</Text>
                </NewHold>
                <Content>Create an account</Content>
                <Form>
                    <Upload>
                        <Label>
                            <img />
                            <p>upload your image</p>
                            <input type='file' />
                        </Label>
                    </Upload>
                    <Hold>

                        <InputHold>
                            <Input placeholder='Name' />
                        </InputHold>
                        <InputHold>
                            <Input placeholder='Email' />
                        </InputHold>
                        <InputHold>
                            <Input placeholder='Password' />
                        </InputHold>
                        <Buttons>
                            <Button bg>Create account</Button>
                            <Button bg1><SiGoogle /> Sgn Up with Google</Button>
                        </Buttons>
                        <Next>
                            <Tag>Already have an account? <Link to='/signIn' style={ { textDecoration: 'none' } }><span>LogIn</span></Link></Tag>
                        </Next>
                    </Hold>
                </Form>
            </Right>
        </Container>
    );
};

export default SignUp;

const NewHold = styled.div`
    display: none;

    @media (max-width: 800px){
        width: 100%;
        display: flex;
        /* padding-left: 10px; */
    }
`;
const Tag = styled.div`

    span{
        color: blue;
        cursor: pointer;
    }
`;
const Next = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;
const Button = styled.button`
    margin-top: 10px;
    width: 100%;
    height: 40px;
    cursor: pointer;
    border: 0;
    outline: none;
    border-radius: 5px;
    color: ${({ bg }) => bg ? "#fff" : "#000"};
    background-color: ${({ bg }) => bg ? "black" : "transparent"};
    border: 1px solid ${({ bg1 }) => bg1 ? "black" : 0};
`;
const Buttons = styled.div`
    margin-top: 20px;
`;
const InputHold = styled.div`
    width: 100%;
    height: 35px;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 20px;
`;
const Input = styled.input`
    border: 0;
    outline: none;
    width: 100%;
    height: 30px;
    /* padding: 0 10px; */
`;
const Label = styled.label`
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed black;
    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* background-color: green; */
    }
    p{
        position: absolute;
    }
    /* background-color: green; */
    input{
        display: none;
    }
`;
const Upload = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
`;
const Content = styled.div`
    width: 300px;

    @media (max-width: 800px){
        display: none;
    }
`;
const Hold = styled.div`
    width: 300px;
    /* display: flex;
    align-items: center; */
`;
const Form = styled.div`
    width: 85%;
    height: 570px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background-color: red; */
`;
const Right = styled.div`
    flex: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 800px){
        flex: 1;
    }
`;
const Text = styled.div`
    font-weight: 800;
    font-size: 20px;
    margin-left: 10px;

    span{
    font-size: 30px;
        color: red;
    }
`;
const Logo = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid black;
    background-color: #fff;
`;
const LogoHold = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 20px;
`;
const Left = styled.div`
    flex: 1;
    background-color: silver;

    @media (max-width: 800px){
        display: none;
    }
`;
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    /* align-items: center; */
    justify-content: center;
`;