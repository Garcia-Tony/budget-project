import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useExpenses } from './ExpenseContext';
import { useData } from '../components/User';

export function NewExpense() {
  const { addExpense } = useExpenses();
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [schedule, setSchedule] = useState('');

  const { handleSignOut } = useData();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [expense, setExpense] = useState(false);
  const [, setCancel] = useState(false);
  const [save, setSave] = useState(false);

  const handlePopUp = () => setPopUp(true);
  const closePopUp = () => setPopUp(false);
  const handleExpense = () => setExpense(true);
  const closeExpense = () => setExpense(false);
  const closeCancel = () => setCancel(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleSave = () => setSave(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newExpense = { name: expenseName, amount, dueDate, schedule };
    addExpense(newExpense);
  };

  return (
    <div className="relative flex-grow flex-1 pl-2 px-4">
      <div className="flex items-center space-x-4">
        <button
          className="rounded py-2 px-1.5 bg-white hover:bg-gray-200 transition mt-6"
          onClick={toggleMenu}>
          <svg
            className="md:w-[50px] md:h-[50px] w-8 h-8 text-[#01898B]"
            viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            />
          </svg>
        </button>

        <img
          src="/ProBudget.png"
          alt="Pro Budget Logo"
          className="size-14 max-w-[60px] max-h-[60px] mt-5 md:size-20 md:mt-4 md:max-w-[150px] md:max-h-[150px]"
        />

        <div className="flex w-full justify-between items-center md:mt-4">
          <button onClick={handleExpense} className="ml-auto">
            <svg
              className="mt-4 w-12 h-12 md:w-[60px] md:h-[60px] md:mt-[-0px] text-[#01898B]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 12H12M16 12H12M12 12V8M12 12V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {expense && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-10">
              <div className="rounded-[50px] bg-[#cbcbcb] p-6 px-6 rounded shadow-lg text-center border border-black ">
                <h3 className="text-5xl font-bold mb-5 mt-5 text-black font-extrabold">
                  Add New <br />
                  Expense?
                </h3>
                <button
                  className="mt-6 px-18 text-4xl font-bold py-2 px-12 bg-[#067E81] text-black border border-black rounded-full"
                  onClick={() => {
                    navigate('/new-expense');
                  }}>
                  YES
                </button>
                <button
                  className="mt-6 px-18 text-4xl font-bold py-2 px-14 ml-4 bg-[#696969] text-black border border-black rounded-full"
                  onClick={closeExpense}>
                  NO
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <hr className="my-4 border-t-2 border-[#01898B]" />

      <h2
        className="text-5xl md:text-6xl text-center"
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
        New Expense
      </h2>

      <form onSubmit={handleSubmit}>
        <label className="block">
          <span
            className="ml-1 text-2xl md:text-4xl text-black"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            Expense{' '}
          </span>
          <input
            required
            name="Expense"
            placeholder="Expense Name"
            type="text"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            className="mt-1 text-l md:text-xl block border border-gray-600 rounded p-2 h-9 md:h-10 w-full"
          />
        </label>

        <label className="block mt-3">
          <span
            className="ml-1 text-xl md:text-3xl text-black"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            Amount
          </span>
          <input
            required
            name="Amount"
            placeholder="$"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 md:text-xl text-l block border border-gray-600 rounded p-2 h-9 md:h-10 w-full"
          />
        </label>

        <label className="block mt-3">
          <span
            className="ml-1 text-xl md:text-3xl text-black"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            Due Date
          </span>
          <input
            required
            name="Due Date"
            placeholder="MM/DD/YYYY"
            type="text"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="mt-1 text-l md:text-xl block border border-gray-600 rounded p-2 h-9 md:h-10 w-full"
          />
        </label>

        <label className="block mt-6">
          <span
            className="ml-1 text-2xl md:text-4xl text-black"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            Schedule
          </span>
          <div className=" flex flex-col md:flex-row md:space-x-36 md:text-2xl md:items-center mt-2 pt-2 bg-[#E1E0E0] rounded-lg shadow-md shadow-gray-500 p-2">
            <label className="mt-[-2px] md:mt-1 md:mb-1 flex items-center space-x-2">
              <input
                type="radio"
                name="Schedule"
                value="every-week"
                className="form-radio text-[#01898B] md:w-4 md:h-4"
                required
                onChange={(e) => setSchedule(e.target.value)}
              />
              <span
                className="text-l md:text-2xl"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                Every Week
              </span>
            </label>

            <label className="mt-1 flex items-center space-x-2">
              <input
                type="radio"
                name="Schedule"
                value="every-month"
                className="form-radio text-[#01898B] md:w-4 md:h-4"
                required
                onChange={(e) => setSchedule(e.target.value)}
              />
              <span
                className="text-l md:text-2xl"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                Every Month
              </span>
            </label>

            <label className="mt-1 flex items-center space-x-2">
              <input
                type="radio"
                name="Schedule"
                value="every-3-months"
                className="form-radio text-[#01898B] md:w-4 md:h-4"
                required
                onChange={(e) => setSchedule(e.target.value)}
              />
              <span
                className="text-l md:text-2xl"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                Every 3 Months
              </span>
            </label>

            <label className="mt-1 flex items-center space-x-2">
              <input
                type="radio"
                name="Schedule"
                value="every-6-months"
                className="form-radio text-[#01898B] md:w-4 md:h-4"
                required
                onChange={(e) => setSchedule(e.target.value)}
              />
              <span
                className="text-l md:text-2xl"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                Every 6 Months
              </span>
            </label>

            <label className="mt-1 flex items-center space-x-2">
              <input
                type="radio"
                name="Schedule"
                value="every-year"
                className="form-radio text-[#01898B] md:w-4 md:h-4"
                required
                onChange={(e) => setSchedule(e.target.value)}
              />
              <span
                className="text-l md:text-2xl"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                Every Year
              </span>
            </label>
          </div>
        </label>

        <div className="flex justify-center md:mt-1">
          <button
            className=" drop-shadow-xl mt-6 px-[65px] md:px-[275px] mr-1 ml-2 text-4xl md:text-5xl font-bold py-1 md:py-2 px-12 bg-[#067E81] text-black border rounded-3xl"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
            onClick={handleSave}>
            Save
          </button>

          <button
            className=" drop-shadow-xl mt-6 px-[50px] md:px-[275px] ml-6 text-4xl font-bold py-1 md:py-2 md:text-5xl px-12 bg-[#696969] text-black border rounded-3xl"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
            onClick={() => {
              closeCancel();
              navigate('/home');
            }}>
            Cancel
          </button>
        </div>
      </form>

      {save && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-10">
          <div className="md:px-8 md:py-8 bg-[#cbcbcb] py-5 px-6 p-6 rounded shadow-lg text-center border border-black rounded-[50px] ">
            <h3 className="md:text-[50px] text-[44px] font-bold text-black mt-1">
              Expense <br /> Created
            </h3>

            <button
              className="md:px-36 md:py-3 font-bold mt-6 px-28 text-4xl py-2 bg-[#067E81] text-black border border-black rounded-full"
              onClick={() => navigate('/home')}>
              OK
            </button>
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div
          className={`absolute top-0 left-0 h-screen w-64 bg-white shadow-md border transition-all transform ease-in-out
  ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
  shadow-lg shadow-black md:w-1/2`}>
          <button
            className="flex justify-center w-full mb-2"
            onClick={toggleMenu}>
            <svg
              className="w-[55px] h-[55px] md:w-[100px] md:h-[100px] mr-[180px] mt-5 md:mr-[82%]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.707 5.293a1 1 0 0 1 0 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"
                fill="#01898B"
              />
            </svg>
          </button>

          <h2 className="text-4xl ml-3 text-[#01898B] font-bold mt-8 md:text-5xl md:ml-[25px]">
            Menu
          </h2>

          <button
            className="md:text-4xl md:px-28 md:ml-[25px] text-2xl block text-center border border-[#01898B] rounded-full py-1 px-[55px] ml-3 mt-10 bg-[#01898B] text-white  hover:bg-[#016B6D] transition"
            onClick={handlePopUp}>
            Log Out
          </button>
        </div>
      )}

      {popUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-10">
          <div className="md:px-12 rounded-[50px] bg-[#cbcbcb] p-7 rounded shadow-lg text-center border border-black ">
            <h3 className="md:text-6xl text-5xl font-bold mb-5 mt-5 text-black">
              Log Out?
            </h3>
            <button
              className="md:text-5xl md:px-20 mt-6 px-18 text-4xl font-bold py-2 px-12 bg-[#067E81] text-black border border-black rounded-full"
              onClick={() => {
                handleSignOut();
                navigate('/sign-up');
              }}>
              YES
            </button>
            <button
              className="md:text-5xl md:px-20 mt-6 px-18 text-4xl font-bold py-2 px-14 ml-4 bg-[#696969] text-black border border-black rounded-full"
              onClick={closePopUp}>
              NO
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
