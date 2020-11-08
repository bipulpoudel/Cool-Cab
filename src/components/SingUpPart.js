import React from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First name is a required field')
        .min(5, 'First name should be more than 5 character long!'),
    lastName: Yup.string()
        .required('Last name is a required field')
        .min(3, 'Last name should be more than 5 character long!'),
    phone: Yup.string()
        .required('Phone Number is a required field')
        .min(10, 'Enter a valid 10 digit phone number!'),
    email: Yup.string()
        .email('Please enter a valid email')
        .required('Email is a required field'),
    password: Yup.string()
        .required('Password is a required field')
        .min(8, 'Password length must be greater than 8'),
});

function SingUpPart() {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                password: '',
            }}
            validationSchema={registerSchema}
            onSubmit={values => {
                alert(`Congratulation ${values.email}, The form is validated`);
            }}
        >
            {({ errors, touched }) => (
                <Form className='user-access-form'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                {errors.firstName && touched.firstName ? (
                                    <small class='form-text text-danger'>
                                        {errors.firstName}
                                    </small>
                                ) : null}
                                <Field
                                    name='firstName'
                                    className='form-control'
                                    placeholder='First Name'
                                />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                {errors.lastName && touched.lastName ? (
                                    <small class='form-text text-danger'>
                                        {errors.lastName}
                                    </small>
                                ) : null}
                                <Field
                                    name='lastName'
                                    className='form-control'
                                    placeholder='Last Name'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='form-group'>
                        {errors.phone && touched.phone ? (
                            <small class='form-text text-danger'>
                                {errors.phone}
                            </small>
                        ) : null}
                        <Field
                            name='phone'
                            className='form-control'
                            placeholder='Mobile Number'
                        />
                    </div>
                    <div className='form-group'>
                        {errors.email && touched.email ? (
                            <small class='form-text text-danger'>
                                {errors.email}
                            </small>
                        ) : null}
                        <Field
                            name='email'
                            className='form-control'
                            placeholder='Email Address'
                        />
                    </div>
                    <div className='form-group'>
                        {errors.password && touched.password ? (
                            <small class='form-text text-danger'>
                                {errors.password}
                            </small>
                        ) : null}
                        <Field
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

export default SingUpPart;
