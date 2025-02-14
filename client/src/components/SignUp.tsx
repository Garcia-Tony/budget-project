import { type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from './UserContext';

export function RegistrationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData(event.currentTarget);
      const userData = Object.fromEntries(formData);
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      };
      const res = await fetch('/api/auth/sign-up', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const user = (await res.json()) as User;
      console.log('Registered', user);
      setPopUp(true);
    } catch (err) {
      alert(`Error registering user: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#13878B]">
      <img src="/ProBudget.png" alt="ProBudget Logo" className="w-32 mb-4" />
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <h2 className="text-6xl text-black text-center mb-6">Sign Up</h2>
        <div className="mb-1">
          <label className="mb-1 block">
            <span className="underline text-2xl text-white">Username</span>
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
          Sign Up
        </button>
      </form>
      <p className="text-xl mt-8 text-white">
        Already have an account?{' '}
        <span
          className="text-xl text-black cursor-pointer underline hover:text-[#00C3C9] transition"
          onClick={() => navigate('/log-in')}>
          Login
        </span>
      </p>

      {popUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-10">
          <div className="bg-[#cbcbcb] p-6 rounded shadow-lg text-center ">
            <h3 className="text-xl font-bold mb-2 text-black">
              Account Created
            </h3>
            <p className="text-black mt-4">
              Your account has been successfully created
            </p>
            <button
              className="mt-6 px-20 text-3xl py-2 bg-[#067E81] text-black border rounded-full"
              onClick={() => navigate('/log-in')}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
