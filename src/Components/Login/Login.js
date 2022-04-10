import React from 'react';
import { Link } from 'react-router-dom';
// import GoogleLogo from "../../Assets/Image/google.svg";
import GoogleLogo from "../../images/google.svg";

const Login = () => {
    return (
        <div className="w-1/3 mx-auto border-2 shadow-md bg-gray-300 rounded-md">
            <h2 className="text-center text-xl font-semibold p-4">Login</h2>
            <div className="ml-32">
                <div>
                <h1 htmlFor="email">Email: </h1>
                <input type="email" className="placeholder-shown:border-gray-500 border-2 text-center px-2 w-80 h-12 rounded-2" placeholder="Email"  required/>
                </div>
                <div className="mt-2">
                <h1 htmlFor="email">Password: </h1>
                <input type="email" className="placeholder-shown:border-gray-500 border-2 text-center px-2 w-80 h-12 rounded-2" placeholder="Password" required />
                </div>
                <button className="mx-auto w-80 h-12 border-3 mt-3 bg-purple-600 text-white font-semibold rounded-md">Login</button>
            </div>
            <p className="text-center p-3">New to Ema-john? <Link className="underline text-amber-500" to="/signup">Create an account</Link></p>
            
            <div className='horizontal-divider'>
          
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className='ml-32  mb-3'>
          <button className='border-2 flex text-center px-5 w-80  py-2 '>
            <img src={GoogleLogo} alt='' />
            <p className='font-semibold ml-2 mt-1'> Continue with Google </p>
          </button>
        </div>

        </div>
    );
};

export default Login;