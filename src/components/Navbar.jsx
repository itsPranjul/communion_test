import { Link } from "react-router-dom";
import logo from "../assets/cm.png";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-50 p-4 shadow-md font-poppins">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="CommunionHub Logo" 
            className="h-12 w-12 md:h-14 md:w-14 cursor-pointer hover:opacity-80 transition-opacity"
          />
          <h1 className="text-xl font-semibold text-blue-600">Communion Hub</h1>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-6 text-lg text-gray-700">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">About</Link>
          </li>
          <li>
            <Link to="/events" className="hover:underline">Events</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 focus:outline-none">
          ☰
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {menuOpen && (
        <ul className="md:hidden bg-white p-4 shadow-lg text-center text-lg text-gray-700">
          <li className="py-2 border-b"><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li className="py-2 border-b"><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li className="py-2"><Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
