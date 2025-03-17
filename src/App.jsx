import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <h1>Money manager</h1>
        <p>Track your expenses and visualize your spending.</p>
      </div>
  );
};

export default App
