import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Pages/Home";
import DashBoard from "./Pages/Dashboard";  // Make sure this file exists
import AddExpense from "./Pages/AddExpense"; // Ensure correct spelling

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>
    </>
  );
}

export default App;
