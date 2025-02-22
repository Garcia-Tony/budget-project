import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthPage } from './pages/SwitchPage';
import { UserProvider } from './components/UserContext';
import { RegistrationForm } from './pages/SignUp';
import { Home } from './pages/Home';
import { NewExpense } from './pages/NewExpense';

export function App() {
  return (
    <UserProvider>
      <Routes>
        <Route index element={<RegistrationForm />} />
        <Route path="/sign-up" element={<Navigate to="/" />} />
        <Route path="/log-in" element={<AuthPage mode="log-in" />} />
        <Route path="/new-expense" element={<NewExpense />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </UserProvider>
  );
}
