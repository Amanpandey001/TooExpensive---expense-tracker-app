import { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { v4 as uuidv4 } from 'uuid';
import Sep from './components/seperator/Sep';

function App() {

  const saveToLS = () => {
    localStorage.setItem('budgets', JSON.stringify(budgets))
  }
  const saveexp = (expenses) => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }
  const currentDate = new Date().toLocaleDateString();
  const [budgets, setBudgets] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(''); //yaha ref ke jagah ye use karo, jo bhi kaam karna ho jisme ye wale ka functionality chahiye, to ref mat use karo, state use karo...

  const showbud = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    const parsedValue = parseInt(value);

    if (value === '' || (parsedValue >= 0 && parsedValue <= 10000000000)) {
      setBudgets(value);
    }
  }

  const handleAddBudget = () => {
    showbud.current.innerHTML = 'Total Budget: ' + budgets + '/-';
    saveToLS();
    setBudgets('');
  }

  const handleAddExpense = () => { //ye add wale button jab dabega tab chalega
    const expense = { //button dabte hi expense namak object banega jisme jo input ke dwara title aur number liya gaya he wo isme title aur amount me add ho jayega
      id: uuidv4(),
      title: expenseName,
      amount: parseInt(expenseAmount)
    }
    setExpenses([...expenses, expense]); //ab expenses wala state he jo, wo spread hoga using ... operator, firr usme expense object add ho jayega as a array, i.e wo ek array ka item hoga 
    setExpenseName('');//add hone ke baad input wala jo section he wo clear ho jayega
    setExpenseAmount('');
  }
  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));

    }

  },[])
  useEffect(() => {
    const storedBudgets = localStorage.getItem('budgets');
    if (storedBudgets) {
      let budgets = JSON.parse(storedBudgets);
      showbud.current.innerHTML = 'Total Budget: ' + budgets + '/-';
    }
   
  }, []);
  useEffect(() => {
    saveexp(expenses);
  }, [expenses]);

  return (
    <>
      <Navbar />
      <main className='main-content'>
        <div className="container w-[50vw] m-auto border p-4">
          <div className="top mx-5 flex justify-between">
            <h3 className='underline selection:bg-transparent cursor-default font-bold'>Date : {currentDate}</h3>
            <h3 className='selection:bg-transparent cursor-default underline font-bold' ref={showbud}> </h3>
          </div>
          <Sep />
          <div className="middle flex gap-5 mx-5 my-6 ">
            <input
              type="number"
              placeholder='Enter your budget'
              className='px-3 py-1 bg-gray-500 bg-opacity-30 rounded-lg no-arrows'
              onChange={handleChange}
              value={budgets}
            />
            <button disabled={budgets.length === 0} className='disabled:bg-gray-300 border px-3 py-1 rounded-lg bg-gray-500 hover:bg-gray-700 hover:font-bold transition-all duration-200' onClick={handleAddBudget}>Save</button>
          </div>
          <Sep />
          <div className="bottom mx-5">
            <h3 className='underline text-center text-4xl font-bold my-4 cursor-default selection:bg-transparent'>Expenses</h3>
            <div className='flex flex-col items-center gap-2 justify-center my-5'>
              <div className="flex gap-3">
                <input type="text" value={expenseName} onChange={(e) => setExpenseName(e.target.value)} className='px-3 py-1 bg-gray-500 bg-opacity-30 rounded-lg' placeholder='Enter Your Item' name='title' />
                <input type="number" value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} placeholder='Enter Amount Spent' className='px-3 py-1 bg-gray-500 bg-opacity-30 rounded-lg no-arrows' name='amount' />
              </div>
              <button className='disabled:bg-gray-300 border px-3 py-1 rounded-lg bg-gray-500 hover:bg-gray-700 hover:font-bold transition-all duration-200' disabled={expenseName === '' || expenseAmount === ''} onClick={handleAddExpense}>Add</button>
            </div>
            <ol className="expended bg-zinc-700 rounded-md py-5">
              {
                expenses.map((expense) => ( //expenses wala jo state he uske items ko nikalke niche diye gaye li me wo add ho jayega
                  <li key={expense.id}><h3 className='bg-transparent selection:bg-transparent cursor-default'>{expense.title}</h3><p className='bg-transparent selection:bg-transparent cursor-default'>{expense.amount}/-</p></li>
                ))
              }
            </ol>
          </div>
        </div>
      </main>


      <Footer />

    </>
  );
}

export default App;
