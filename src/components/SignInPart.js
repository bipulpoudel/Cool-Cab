import React from 'react';

function SignInPart() {
    return (
        <form className='user-access-form'>
            <div className='form-group'>
                <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Email or Phone number'
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
