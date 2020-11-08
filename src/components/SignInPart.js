import React from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter a valid email')
        .required('Email is a required field'),
});

function SignInPart() {
    return (
        <form className='user-access-form'>
            <div className='form-group'>
                <input
                    type='email'
                    className='form-control'
                    aria-describedby='emailHelp'
                    placeholder='Enter your email address'
                />
            </div>
            <div className='form-group'>
                <input
                    type='password'
                    className='form-control'
                    id='exampleInputPassword1'
                    placeholder='Password'
                />
            </div>
            <button type='submit' className='button button-dark btn-block'>
                Sign in Now
            </button>
        </form>
    );
}

export default SignInPart;
