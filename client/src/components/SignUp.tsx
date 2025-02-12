import { type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from './UserContext';

export function RegistrationForm() {
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      };
      const res = await fetch('/api/auth/sign-up', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const user = (await res.json()) as User;
      console.log('Registered', user);
      console.log(
        `You can check the database with: psql -d userManagement -c 'select * from users'`
      );
      alert(
        `Successfully registered ${user.username} as userId ${user.userId}.`
      );
      navigate('/log-in');
    } catch (err) {
      alert(`Error registering user: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container">
      <img
        src="/ProBudget.png"
        alt="ProBudget Logo"
        className="w-32 mx-auto mb-4"
      />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap mb-1">
          <div className="w-1/2">
            <h2 className="text-xl font-bold text-orange-500">Sign Up</h2>
            <label className="mb-1 block">
              <span className="underline">Username</span>
              <input
                required
                name="username"
                placeholder="username"
                type="text"
                className="block border border-gray-600 rounded p-2 h-8 w-full mb-2"
              />
            </label>
            <br />
            <br />
            <label className="mb-1 block">
              Password
              <input
                required
                name="password"
                placeholder="password"
                type="password"
                className="block border border-gray-600 rounded p-2 h-8 w-full mb-2"
              />
            </label>
          </div>
        </div>

        <button
          disabled={isLoading}
          className="align-middle text-center border rounded py-1 px-3 bg-blue-600 text-white">
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm">
        Already have an account?{' '}
        <span
          className="text-blue-600 cursor-pointer underline"
          onClick={() => navigate('/log-in')}>
          Login
        </span>
      </p>
    </div>
  );
}
