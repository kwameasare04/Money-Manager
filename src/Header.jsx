import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Money Manager</div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/add-expense" className="hover:underline">
              Add an Expense
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
