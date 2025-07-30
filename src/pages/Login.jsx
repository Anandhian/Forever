import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('enter email');
  const [password, setPassword] = useState('enter password');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example login logic (replace with real auth)
    if (email === 'anandhi' && password === 'anandhi209') {
      navigate('/'); // Navigate to home or dashboard
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl font-serif">Login</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="w-full flex justify-between text-sm -mt-2">
        <p className="cursor-pointer text-gray-600 hover:underline">
          Forgot your password?
        </p>
        <p
          className="cursor-pointer text-gray-600 hover:underline"
          onClick={() => navigate('/signup')}
        >
          Create account
        </p>
      </div>

      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4"
      >
        Sign In
      </button>
    </form>
  );
};

export default Login;
