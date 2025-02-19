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
        className="border rounded py-1 px-3 bg-black text-white hover:bg-white transition"
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        Menu
      </button>

      {isMenuOpen && (
        <div className="absolute top-12 left-4 bg-white shadow-md border rounded p-2">
          <button
            className="block text-center border rounded py-1 px-3 bg-blue-600 text-white w-full"
            onClick={() => {
              handleSignOut();
              navigate('/');
            }}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
