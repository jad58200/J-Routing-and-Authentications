import React, { useState,useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FaUserCircle, FaCrown, FaClock, FaCog} from "react-icons/fa";

export default function Dashboard() {
  const { user } = useAuth();
  const [lastLogin, setLastLogin] = useState("");
  const [accountCreation, setAccountCreation] = useState("");

  useEffect(() => {
  const storedDate = localStorage.getItem("lastLogin");
  if (storedDate) setLastLogin(storedDate);
  }, []);

  useEffect(() => {
  const storedDate = localStorage.getItem("accountCreated");
  if (storedDate) setAccountCreation(storedDate);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Welcome {user?.email || "User"} ;) 
        </h1>
      </header>

      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 flex items-center gap-4">
            <FaUserCircle className="text-3xl text-blue-500" />
            <div>
              <h3 className="text-gray-700 dark:text-gray-200 font-medium">Account Created</h3>
              <p className="text-gray-500 text-sm">{accountCreation || "Nov 2025" }</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 flex items-center gap-4">
            <FaCrown className="text-3xl text-yellow-500" />
            <div>
              <h3 className="text-gray-700 dark:text-gray-200 font-medium">Current Plan</h3>
              <p className="text-gray-500 text-sm">Free Tier</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 flex items-center gap-4">
            <FaClock className="text-3xl text-green-500" />
            <div>
              <h3 className="text-gray-700 dark:text-gray-200 font-medium">Last Login</h3>
              <p className="text-gray-500 text-sm">{lastLogin || "No record"}</p>
            </div>
          </div>
        </div>

        <section className="mt-8 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Stay Secured 
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Keep your account information up to date and secure, use a strong password and enable
            phone verification in Settings for extra protection.
          </p>
        </section>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/settings"
            className="bg-blue-500 hover:bg-blue-600 text-white text-center py-4 rounded-lg shadow-md transition"
          >
            <FaCog className="inline-block mr-2" />
            Go to Settings
          </Link>
          
          <Link
            to="/bills"
            className="bg-green-500 hover:bg-green-600 text-white text-center py-4 rounded-lg shadow-md transition"
          >
            💳 View Billing Plans
          </Link>
        </section>

        <footer className="text-center mt-10 text-gray-500 dark:text-gray-400 text-sm">
          ⌂ ~2025 - All rights reserved, Jad’s Co.
        </footer>
      </main>
    </div>
  );
}