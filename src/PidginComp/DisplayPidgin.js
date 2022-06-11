import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './SignUpSignIn/SignUp';
import SignIn from './SignUpSignIn/SignIn';

const DisplayPidgin = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <SignUp /> } />
                    <Route path="/signIn" element={ <SignIn /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default DisplayPidgin;