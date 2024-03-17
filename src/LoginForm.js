import React from 'react'
import './LoginForm.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

function LoginForm(){
    return(
        <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
        <div className='login'>
            <h2 className='mb-3'>Login Form</h2>
            <form classNmae='needs-validation'> 
            {/* email */}
            <div className='form-group was-validated mb-2'>
                <label htmlFor='email'className='form-label'>Email Address</label>
                <input type="email" className='form-control' required></input>
                <div className='invalid-feedback'>
                    Please enter your email
                </div>
            </div>
            {/* password */}
            <div className='form-group was-validated mb-2'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input type="password"className='form-control' required></input>
                <div className='invalid-feedback'>
                    Please enter your password
                </div>
            </div>
            {/* remember me */}
            <div className='form-group form-check mb-2'>
            <input type="checkbox" className='form-check-input'></input>
                <label htmlFor='checkbox' className='form-check-label'>Remember me</label>
            </div>
            <button type='submit' className='btn btn-primary block w-100 mt-2 '>Log In</button>
            <div className='reg-link mb-2'>
            <p>Don't Have an account? 
            <a href="#" >Sign Up Here</a>
            </p>
            </div>
            </form>
        </div>
        </div>
        
    )
}

export default LoginForm