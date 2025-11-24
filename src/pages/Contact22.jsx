import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
export default function Contact22() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    emailjs
      .send(
        "service_2b6p4ai",
        "template_hrzmr47",
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          user_message: formData.subject,
        },
        "0OXgdquC2wjEQfjqu"   
      )

      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "" });
        setLoading(false);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setMessage("❌ Failed to send message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

        {message && (
          <p
            className={`mb-3 text-center ${
              message.includes("✅") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 mb-3 w-full rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 mb-3 w-full rounded"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 mb-3 w-full rounded"
        />
        <textarea
          name="subject"
          placeholder="Describe your issue or suggestion"
          value={formData.subject}
          onChange={handleChange}
          className="border p-2 mb-4 w-full rounded h-28"
          required
        />

        <button
          type="submit"
          className={`w-full py-2 rounded text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
        <Link to={'/Bills'} className="hover:text-gray-400 mt-12">
          🡠 Go back
        </Link>
      </form>
    </div>
  );
}
