import { type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, useUser } from './useUser';
import { readToken } from '../lib';

type AuthData = {
  user: User;
  token: string;
};

export function SignInForm() {
  const { handleSignIn } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData(event.currentTarget);
      const userData = Object.fromEntries(formData);
      const req = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${readToken()}`,
        },
        body: JSON.stringify(userData),
      };
      const res = await fetch('/api/auth/log-in', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const { user, token } = (await res.json()) as AuthData;
      handleSignIn(user, token);
      console.log('Signed In', user);
      console.log('Received token:', token);
      navigate('/home');
    } catch (err) {
      alert(`Error signing in: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#13878B] absolute top-0 left-0">
      <img src="/ProBudget.png" alt="ProBudget Logo" className="w-32 mb-4" />
      <h2 className="text-6xl text-black text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-1">
          <label className="w-1/2">
            <span className="underline text-2xl text-white"> Username </span>
            <input
              required
              name="username"
              placeholder="Username"
              type="text"
              className="text-2xl block border border-gray-600 rounded p-2 h-12 w-full mb-2 mt-2"
            />
          </label>
        </div>
        <br></br>
        <div className="mb-1">
          <label className="mb-1 block">
            <span className="underline text-2xl text-white">Password</span>
            <input
              required
              name="password"
              placeholder="Password"
              type="password"
              className=" text-2xl block border border-gray-600 rounded p-2 h-12 w-full mb-2 mt-2"
            />
          </label>
        </div>
        <button
          disabled={isLoading}
          className="text-2xl px-20 text-center border rounded-full py-3 bg-white text-black mt-12 mx-auto block hover:bg-gray-200 transition">
          Login
        </button>
      </form>
      <p className="text-xl mt-8 text-white">
        Don't have an account?{' '}
        <span
          className="text-xl text-black cursor-pointer underline hover:text-[#00C3C9] transition"
          onClick={() => navigate('/sign-up')}>
          Sign Up
        </span>
      </p>
    </div>
  );
}
