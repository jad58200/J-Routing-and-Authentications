import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="font-bold text-xl">J Routing :)</h1>
      <div className="flex gap-4 items-center">
        {!user ? (
          <>
            <Link to="/login" className="hover:text-gray-300">Login</Link>
            <Link to="/register" className="hover:text-gray-300">Register</Link>
            
          </>
        ) : (
          <>
            <nav className="space-x-5">
          <Link to="/dashboard" className="hover:text-green-600">Home</Link>
          <Link to="/settings" className="hover:text-green-600">Settings</Link>
          <Link to="/bills" className="hover:text-green-600">Billing</Link>
        </nav>
            <button 
              onClick={logout} s
              className="bg-red-600 px-3 py-1 rounded hover:bg-red-700">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
