import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncExp } from './components/IncExp';
import { ExpenseList } from './components/ExpenseList';
import './App.css';
import { AddExpense } from './components/AddExpense';
import { GlobalProvider } from './context/GlobalState';

function App() {
	return (
		<GlobalProvider>
			<Header />
			<div className='container'>
				<Balance />
				<IncExp />
				<ExpenseList />
				<AddExpense />
			</div>
		</GlobalProvider>
	);
}

export default App;
