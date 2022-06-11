import React, { useState } from 'react'
import styled from 'styled-components'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Axios from 'axios'
import { AuthContext } from './AuthProvider'

import { Link, useNavigate } from 'react-router-dom'



const Post = () => {

    // const { currentUser } = React.useContext(AuthContext)
    const [avatar, setAvatar] = useState('')
    const navigate = useNavigate()

    const modelSchema = yup.object().shape({
        userName: yup.string().required('Title is required'),
        email: yup.string().required('Title is required'),
        password: yup.string().required('Title is required'),
    })

    const uploadImage = (e) => {
        const file = e.target.files[0]
        const save = URL.createObjectURL(file)
        setAvatar(file)
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolever: yupResolver(modelSchema)
    })

    const postSubmit = handleSubmit(async (data) => {
        const { userName, email, password } = data

        const formData = new FormData()
        formData.append('userName', userName)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('avatar', avatar)

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        const url = 'http://localhost:3554/signUp'

        await Axios.post(url, formData, config)

        reset()
        navigate('/')

    })




    return (
        <Container>
            <Wrapper onSubmit={postSubmit}>
                <Avatar src={avatar} />
                <Upload htmlFor="pix"> Upload<input type="file" id="pix" onChange={uploadImage} /></Upload>
                <InputHold>
                    <input placeholder='userName' {...register('userName')} />
                    <input placeholder='email' {...register('email')} />
                    <input placeholder='Password' {...register('password')} />
                    <button type='submit'>Sign Up</button>
                </InputHold>
                <p>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
            </Wrapper>
            <BoxHold>
                <p>Have an account? <Link to='/signIn' style={{ textDecoration: 'none' }}><span>LogIn</span></Link></p>
            </BoxHold>
        </Container>
    )
}

export default Post

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Wrapper = styled.div`
    width: 370px;
    height: 480px;
    display: flex;
    border: 1px solid lightgray;
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
`
const InputHold = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     input{
        outline: none;
        width: 280px;
        height: 30px;
        /* border: none; */
        border: 0.5px solid lightgray;
        margin: 5px;
        padding-left: 5px;
        border-radius: 5px;
        /* :hove{
            border: 2px solid lightgray;
        } */
    }

    button{
        outline: none;
        border: none;
        background-color: blue;
        width: 280px;
        height: 27px;
        color: white;
        font-weight: 700;
        border-radius: 5px;
        cursor: pointer;
        margin: 5px;
    }
`

const Upload = styled.label`

        outline: none;
        border: none;
        background-color: blue;
        width: 100px;
        height: 50px;
        color: white;
        font-weight: 700;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    input{
        display: none;
    }
`
const BoxHold = styled.div`
    width: 370px;
    height: 100px;
    display: flex;
    border: 1px solid lightgray;
    border-radius: 5px;
    align-items: center;
    justify-content: center;   
    margin: 10px;
    text-decoration: none;

    p{
        font-weight: 700;
    }
    span{
        color: blue;
        font-weight: 700;
    }
`
const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: skyblue;
    margin: 10px;
`
