import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogo from "../../images/google.svg";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, hookError, user] = useCreateUserWithEmailAndPassword(auth);
    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/shop');
    }
    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your password not match')
            return;

        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long')
            return;
        }

        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className="w-1/3 mx-auto border-2 shadow-md rounded-md bg-gray-300">
            <h2 className="text-center text-xl font-semibold p-4">SignUp</h2>
            <form onSubmit={handleCreateUser} className="ml-32">
                <div>
                    <h1 htmlFor="email">Email: </h1>
                    <input onBlur={handleEmailBlur} type="email" className="placeholder-shown:border-gray-500 border-2 text-center px-2 w-80 h-12 rounded-2" placeholder="Email" required />
                </div>


                <div className="mt-2">
                    <h1 htmlFor="email">Password: </h1>
                    <input onBlur={handlePasswordBlur} type="password" className="placeholder-shown:border-gray-500 border-2 text-center px-2 w-80 h-12 rounded-2" placeholder="Password" required />
                </div>

                <div className="mt-2">
                    <h1 htmlFor="email">Confirm Password: </h1>
                    <input onBlur={handleConfirmPasswordBlur} type="password" className="placeholder-shown:border-gray-500 border-2 text-center px-2 w-80 h-12 rounded-2" placeholder="Confirm Password" required />
                </div>

                <p className="text-center text-xl text-red-600 mr-16 mt-3">{error}</p>
                <p className="text-center text-xl text-red-600 mr-16 mt-3">{hookError}</p>

                <button className="mx-auto w-80 h-12 border-3 mt-3 bg-purple-600 text-white font-semibold rounded-md">SignUp</button>
            </form>
            <p className="text-center p-3">Already Have an Account? <Link className="underline text-emerald-700" to="/login">Login</Link></p>


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