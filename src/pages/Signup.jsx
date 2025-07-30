import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('anandhi');
  const [password, setPassword] = useState('anandhi209');

  const handleSignup = (e) => {
    e.preventDefault();

    // Example signup logic (replace with API call)
    if (name && email && password) {
      // Simulate success
      alert('Signup successful!');
      navigate('/'); // Navigate to home or dashboard
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <form
      onSubmit={handleSignup}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl font-serif">Sign Up</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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
        <p className="cursor-pointer text-gray-600 hover:underline">Forgot your password?</p>
        <p
          className="cursor-pointer text-gray-600 hover:underline"
          onClick={() => navigate('/login')}
        >
          Login Here
        </p>
      </div>

      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
