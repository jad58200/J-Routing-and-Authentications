import { Link } from "react-router-dom";
export default function Bills() {
  const handleClick = () => {
    alert("please try again later !");    
  };
  return (
    
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <h2 className="text-3xl font-bold mb-6 text-center">💳 Subscription Plans</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
    <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 hover:opacity-80 hover:scale-[1]">
      <h3 className="text-xl font-semibold mb-2">Free Plan</h3>
      <p className="text-gray-600 mb-4">Basic access with limited features</p>
      <p className="font-bold text-2xl mb-4">$0</p>
      <button className="bg-gray-300 text-black px-4 py-2 rounded">
        Current Plan
      </button>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-6 text-center border-2 border-green-500 transition-all duration-300 hover:opacity-80 hover:scale-[1.02]">
      <h3 className="text-xl font-semibold mb-2">Pro Plan</h3>
      <p className="text-gray-600 mb-4">Full access + priority support</p>
      <p className="font-bold text-2xl mb-4">$9.99/mo</p>
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" onClick={handleClick}>
        Upgrade
      </button>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 hover:opacity-80 hover:scale-[1.02]">
      <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
      <p className="text-gray-600 mb-4">Custom solutions for teams</p>
      <p className="font-bold text-2xl mb-4">Contact Us</p>
      <Link to="/Contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Contact
      </Link>
    </div>
  </div>
  <Link to={'/Dashboard'} className="hover:text-gray-400 mt-6">
    🡠 Go back
  </Link>
</div>
  );
}
