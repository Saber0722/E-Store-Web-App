import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

function Navbar() {
  const { cart } = useContext(CartContext);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

return (
    <nav className="bg-gray-800 text-white dark:bg-gray-950 dark:text-gray-200 p-4">
        <div className="container mx-auto flex justify-between items-center">
            {/* Enabling a round border hover for animation with custom margin */}
            <Link
                to="/"
                className="text-xl font-bold hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:rounded-[6px] hover:scale-105 transition-transform duration-200 hover:mx-[6px]"
            >
                E-Store
            </Link>
            <div className="flex items-center space-x-4">
                <Link
                    to="/"
                    className="hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:rounded-[6px] hover:scale-105 transition-transform duration-200 hover:mx-[6px]"
                >
                    Products
                </Link>
                <Link
                    to="/cart"
                    className="hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:rounded-[6px] hover:scale-105 transition-transform duration-200 hover:mx-[6px]"
                >
                    Cart ({cart.length})
                </Link>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full dark:hover:bg-gray-800 hover:mx-[6px]"
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? (
                        <MoonIcon className="h-6 w-6" />
                    ) : (
                        <SunIcon className="h-6 w-6" />
                    )}
                </button>
            </div>
        </div>
    </nav>
);
}

export default Navbar;