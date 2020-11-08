import React from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter a valid email')
        .required('Email is a required field'),
    password: Yup.string()
        .required('Password is a required field')
        .min(8, 'Password length must be greater than 8'),
});

function SignInPart() {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={signInSchema}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form className='user-access-form'>
                    <div className='form-group'>
                        <input
                            type='email'
                            className='form-control'
                            aria-describedby='emailHelp'
                            placeholder='Enter your email address'
                        />
                        {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null}
                    </div>

                    <div className='form-group'>
                        <input
                            type='password'
                            className='form-control'
                            id='exampleInputPassword1'
                            placeholder='Password'
                        />
                        {errors.password && touched.password ? (
                            <small id='emailHelp' class='form-text text-danger'>
                                {errors.password}
                            </small>
                        ) : null}
                    </div>

                    <button
                        type='submit'
                        className='button button-dark btn-block'
                    >
                        Sign in Now
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default SignInPart;
