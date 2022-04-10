import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogo from "../../images/google.svg";
const SignUp = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error,setError]=useState('');

    const handleEmailBlur=(event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur=(event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur=(event) => {
        setConfirmPassword(event.target.value);
    }
    const handleCreateUser=(event) => {
        event.preventDefault();
        if (password!==confirmPassword) {
            setError('your password not match')
            return;
            
        }
    }
    return (
        <div className="w-1/3 mx-auto border-2 shadow-md rounded-md bg-gray-300">
            <h2 className="text-center text-xl font-semibold p-4">SignUp</h2>
            <div onSubmit={handleCreateUser} className="ml-32">
                <div>
                    <h1 htmlFor="email">Email: </h1>
                    <input onBlur={handleEmailBlur} type="email" className="placeholder-shown:border-gray-500 border-2 text-center px-2 w-80 h-12 rounded-2" placeholder="Email" required />
                </div>


                <div className="mt-2">
                    <h1 htmlFor="email">Password: </h1>
                    <input onBlur={handlePasswordBlur} type="email" className="placeholder-shown:border-gray-500 border-2 text-center px-2 w-80 h-12 rounded-2" placeholder="Password" required />
                </div>

                <div className="mt-2">
                    <h1 htmlFor="email">Confirm Password: </h1>
                    <input onBlur={handleConfirmPasswordBlur} type="email" className="placeholder-shown:border-gray-500 border-2 text-center px-2 w-80 h-12 rounded-2" placeholder="Confirm Password" required />
                </div>

                    <p className="text-center text-xl text-red-600">{error}</p>
                    
                <button className="mx-auto w-80 h-12 border-3 mt-3 bg-purple-600 text-white font-semibold rounded-md">SignUp</button>
            </div>
            <p className="text-center p-3">Already Have an Account? <Link className="underline text-amber-500" to="/login">Login</Link></p>

            {/* <div className='horizontal-divider'>

                <p>or</p>
                <div className='line-right' />
            </div> */}


            <div className='ml-32  mb-3 rounded-md'>
                <button className='border-2 flex text-center px-5 w-80  py-2 '>
                    <img src={GoogleLogo} alt='' />
                    <p className='font-semibold ml-2 mt-1'> Continue with Google </p>
                </button>
            </div>

        </div>
    );
};

export default SignUp;