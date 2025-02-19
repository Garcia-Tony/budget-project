import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../components/useUser';

export function Home() {
  const { handleSignOut } = useUser();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const handlePopUp = () => setPopUp(true);
  const closePopUp = () => setPopUp(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="relative flex-grow flex-1 px-4">
      <div className="flex items-center space-x-4">
        <button
          className="rounded py-1 px-3 bg-white hover:bg-gray-200 transition"
          onClick={toggleMenu}>
          <svg className="w-20 h-20 text-[#01898B]" viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            />
          </svg>
        </button>

        <img src="/ProBudget.png" alt="Pro Budget Logo" className="w-16 h-16" />
        <h2 className="text-xl font-bold text-black">Expense</h2>
      </div>

      <hr className="my-4 border-t-2 border-[#01898B]" />

      <p className=" text-lg text-black">No Current Expenses</p>

      {isMenuOpen && (
        <div
          className={`absolute top-0 left-0 h-full w-48 bg-white shadow-md border transform transition-transform duration-300
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
          <button
            className="flex justify-center w-full mb-2"
            onClick={toggleMenu}>
            <img
              src="/arrow-left.svg"
              alt="Close Menu"
              className="w-6 h-6 transition-transform duration-300"
            />
          </button>
          <h2>Menu</h2>
          <button
            className="block text-center border rounded py-1 px-3 bg-blue-600 text-white w-full hover:bg-gray-200 transition"
            onClick={handlePopUp}>
            Log Out
          </button>
        </div>
      )}

      {popUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-10">
          <div className="bg-[#cbcbcb] p-6 rounded shadow-lg text-center ">
            <h3 className="text-xl font-bold mb-2 text-black">Log Out?</h3>
            <button
              className="mt-6 px-20 text-3xl py-2 bg-[#067E81] text-black border rounded-full"
              onClick={() => {
                handleSignOut();
                navigate('/sign-up');
              }}>
              Yes
            </button>
            <button
              className="mt-6 px-20 text-3xl py-2 bg-[#067E81] text-black border rounded-full"
              onClick={closePopUp}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
