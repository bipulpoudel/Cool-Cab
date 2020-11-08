import React from 'react';

import { Formik, Form, Field } from 'formik';
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
                alert(`Congratulation ${values.email}, The form is validated`);
            }}
        >
            {({ errors, touched }) => (
                <Form className='user-access-form'>
                    <div className='form-group'>
                        {errors.email && touched.email ? (
                            <small id='emailHelp' class='form-text text-danger'>
                                {errors.email}
                            </small>
                        ) : null}
                        <Field
                            name='email'
                            className='form-control'
                            placeholder='Enter the email address'
                        />
                    </div>

                    <div className='form-group'>
                        {errors.password && touched.password ? (
                            <small id='emailHelp' class='form-text text-danger'>
                                {errors.password}
                            </small>
                        ) : null}
                        <Field
                            type='password'
                            name='password'
                            className='form-control'
                            placeholder='Password'
                        />
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
