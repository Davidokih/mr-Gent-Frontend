import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Axios from 'axios'


const SignIn = () => {

    const navigate = useNavigate()
    const [avatar, setAvatar] = useState('')

    const modelSchema = yup.object().shape({
        email: yup.string().required('Title is required'),
        password: yup.string().required('Title is required'),
    })

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolever: yupResolver(modelSchema)
    })

    const postSubmit = handleSubmit(async (data) => {
        const { email, password } = data

        const url = 'http://localhost:3554/signUp'
        const res = await Axios.post(url, { email, password })

        reset()
        navigate("/")
    })
    return (
        <Container>
            <Wrapper>
                <InputHold>
                    <input placeholder='Email' />
                    <input placeholder='Password' />
                    <button >Sign In</button>
                </InputHold>

                <p>Forgot password?</p>
            </Wrapper>
            <Box>
                <p>Don't have an account? <Link to='/signUp' style={{ textDecoration: 'none' }}><span>SignUp</span></Link></p>
            </Box>
        </Container>
    )
}
export default SignIn

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
    height: 400px;
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
    }
`

const Box = styled.div`
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
