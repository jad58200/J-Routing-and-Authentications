import { useState } from "react";
import { Link } from "react-router-dom";

export default function Settings() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    alert("Settings saved successfully!");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[400px]">
        <h2 className="text-2xl font-bold mb-4 text-center">⚙️ Settings</h2>
        <form onSubmit={handleSave} className="flex flex-col space-y-3">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded"
            placeholder="Username"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
            placeholder="Email"
            required
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-2 rounded"
            placeholder="Phone Number"
            required
          />

          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Save Changes
          </button>
          <Link to={'/Dashboard'} className="hover:text-gray-400">
            🡠 go back 
          </Link>
        </form>
      </div>
    </div>
  );
}
