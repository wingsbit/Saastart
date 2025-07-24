import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-10 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold tracking-tight">SaaStart 🚀</Link>
      <div className="space-x-6 text-sm md:text-base">
        <Link to="/signup" className="hover:underline text-blue-400">Sign Up</Link>
        <Link to="/login" className="hover:underline text-blue-400">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
