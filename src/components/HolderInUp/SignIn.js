import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from "../Global/GlobalState";
import axios from 'axios';

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formSchema = yup.object().shape({
        email: yup.string().required('Email is required').email('Email is invalid'),
        password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    });

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    const onSubmit = handleSubmit(async (value) => {
        console.log(value);
        const { email, password } = value;
        const mainUrl = "https://mr-gent-backend.herokuapp.com";
        const url = `${mainUrl}/api/user/signin`;

        await axios.post(url, { email, password }).then((res) => {
            console.log(res.data.data);
            dispatch(createUser(res.data.data));
        });

        navigate("/");
    });
    return (
        <Container>
            <Wrapper>
                <InputHold onSubmit={ onSubmit }>
                    <input placeholder='Email' { ...register('email') } />
                    <input placeholder='Password' { ...register('password') } />
                    <button type='submit'>Sign In</button>
                </InputHold>

                {/* <p>Forgot password?</p> */ }
            </Wrapper>
        </Container>
    );
};
export default SignIn;

const Container = styled.div`
    width: 100%;
    /* height: 100vh; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Wrapper = styled.div`
    width: 370px;
    height: 400px;
    display: flex;
    /* border: 1px solid lightgray; */
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    /* background-color: skyblue; */
    flex-direction: column;

   p{
       text-align: center;
       font-size: 13px;
       width: 280px;
   }
`;
const InputHold = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     input{
         color: #fff;
        outline: none;
        width: 280px;
        height: 40px;
        /* border: none; */
        border-bottom: 0.5px solid lightgray;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        margin: 5px;
        /* padding-left: 5px; */
        /* border-radius: 5px; */
        background-color: transparent;
        /* :hove{
            border: 2px solid lightgray;
        } */
    }

    button{
        outline: none;
        border: none;
        margin-top: 40px;
        background-color: blue;
        width: 280px;
        height: 40px;
        color: white;
        font-weight: 700;
        border-radius: 5px;
        cursor: pointer;
    }
`;

