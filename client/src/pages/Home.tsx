import { useNavigate } from 'react-router-dom';
import { useUser } from '../components/useUser';

export function Home() {
  const { handleSignOut } = useUser();
  const navigate = useNavigate();

  return (
    <div className="relative flex-grow flex-1 px-4">
      <button
        className="inline-block align-middle text-center border rounded py-1 px-3 bg-blue-600 text-white"
        onClick={() => {
          handleSignOut();
          navigate('/');
        }}>
        Sign Out
      </button>
    </div>
  );
}
