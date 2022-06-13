import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignUp = () => {

    const navigate = useNavigate();
    const [ image, setImage ] = useState('/images/IMG-20220512-WA0023.jpg');
    const [ avatar, setAvatar ] = useState('');

    const formSchema = yup.object().shape({
        userName: yup.string().required('Username is required'),
        email: yup.string().required('Email is required').email('Email is invalid'),
        password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
        admin: yup.boolean().required('Admin is required'),
        adminPass: yup.string().required('Admin password is required'),
        confirm: yup.string().oneOf([ yup.ref('password'), null ], 'Passwords must match'),
    });

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    const handleImagee = (e) => {
        const file = e.target.files[ 0 ];
        const save = URL.createObjectURL(file);
        setImage(save);
        setAvatar(file);
    };

    const onSubmit = handleSubmit(async (value) => {
        console.log(value);
        const { userName, email, password, adminPass, admin } = value;
        const mainUrl = "https://mr-gents-backend.herokuapp.com";
        const url = `${mainUrl}/api/user/register`;

        const config = {
            "content-type": "multipart/form-data",
            onUploadProgress: (ProgressEvent) => {
                const { loaded, total } = ProgressEvent;
                const percent = Math.floor((loaded * 100) / total);
                console.log(percent);
            },
        };

        const formData = new FormData();
        formData.append('userName', userName);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('admin', admin);
        formData.append('adminPass', adminPass);
        formData.append('avatar', avatar);

        await axios.post(url, formData, config);

        navigate("/confirm");
    });
    return (
        <Container>
            <Wrapper>
                <Upload htmlFor="pix">
                    <img src={ image } />
                    <Input type="file" id="pix" accept="image/*" onChange={ handleImagee } />
                </Upload>
                <InputHold onSubmit={ onSubmit } type="multipart/form-data">
                    <input placeholder='User Name' { ...register("userName") } />
                    <input placeholder='Email' { ...register("email") } />
                    <input placeholder='Password' { ...register("password") } />
                    <input placeholder='confirm' { ...register("confirm") } />
                    <Admin>
                        <input placeholder='Admin' { ...register("admin") } />
                        <input placeholder='AdminPass' { ...register("adminPass") } />
                    </Admin>
                    <button type="submit">Sign Up</button>
                </InputHold>
            </Wrapper>
        </Container>
    );
};

export default SignUp;

const Admin = styled.label`
width: 150px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

     input{
         color: #fff;
        outline: none;
        width: 50px;
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
`;
const Upload = styled.label`
    width: 100px;
    background-color: red;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 30px;

    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
        border-radius: 100%;
    }
`;
const Input = styled.input`
    display: none;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 370px;
    /* height: 400px; */
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
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: red; */

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
        background-color: blue;
        width: 280px;
        height: 40px;
        color: white;
        font-weight: 700;
        border-radius: 5px;
        cursor: pointer;

        margin-top: 30px;
    }
`;