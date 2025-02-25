import React, { createContext, ReactNode, useContext, useState } from 'react';

interface Expense {
  name: string;
  amount: string;
  dueDate: string;
  schedule: string;
}

interface ExpenseContextType {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
}

interface ExpenseProviderProps {
  children: ReactNode;
}

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC<ExpenseProviderProps> = ({
  children,
}) => {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const storedExpenses = localStorage.getItem('expenses');
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });

  const addExpense = (expense: Expense) => {
    const newExpense = [...expenses, expense];
    setExpenses([...expenses, expense]);
    localStorage.setItem('expenses', JSON.stringify(newExpense));
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpenses must be used within an ExpenseProvider');
  }
  return context;
};
