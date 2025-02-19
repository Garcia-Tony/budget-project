import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../components/useUser';

export function Home() {
  const { handleSignOut } = useUser();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex-grow flex-1 px-4">
      <button
        className="rounded py-1 px-3 bg-white hover:bg-gray-200 transition"
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg className="w-20 h-20 text-[#01898B]" viewBox="0 0 448 512">
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-12 left-4 bg-white shadow-md border rounded p-2 z-50">
          <button
            className="block text-center border rounded py-1 px-3 bg-blue-600 text-white w-full hover:bg-gray-200 transition"
            onClick={() => {
              handleSignOut();
              navigate('/');
            }}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}
