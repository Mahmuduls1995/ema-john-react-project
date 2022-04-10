import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
// import GoogleLogo from "../../Assets/Image/google.svg";
import GoogleLogo from "../../images/google.svg";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();


  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  }

  if (user) {
    navigate('/shop');

  }


  const handleSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);

  }
  return (
    <div className="w-1/3 mx-auto border-2 shadow-md bg-gray-300 rounded-md">
      <h2 className="text-center text-xl font-semibold p-4">Login</h2>
      <form onSubmit={handleSignIn} className="ml-32">
        <div>
          <h1 htmlFor="email">Email: </h1>
          <input onBlur={handleEmailBlur} type="email" className="placeholder-shown:border-gray-500 border-2 text-center px-2 w-80 h-12 rounded-2" placeholder="Email" required />
        </div>
        <div className="mt-2">
          <h1 htmlFor="email">Password: </h1>
          <input onBlur={handlePasswordBlur} type="password" className="placeholder-shown:border-gray-500 border-2 text-center px-2 w-80 h-12 rounded-2" placeholder="Password" required />
        </div>
        <p className="text-center text-xl text-red-600 mr-16 mt-3">{error?.message}</p>
        {
          loading && <p className="text-center text-xl text-neutral-900 mr-16 mt-3 ">Loading....</p>
        }

        <button className="mx-auto w-80 h-12 border-3 mt-3 bg-purple-600 text-white font-semibold rounded-md">Login</button>
      </form>
      <p className="text-center p-3">New to Ema-john? <Link className="underline text-blue-800" to="/signup">Create an account</Link></p>

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