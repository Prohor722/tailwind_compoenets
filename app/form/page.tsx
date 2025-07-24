"use client";

import { useState } from "react";
import clsx from "clsx";

export default function ModernForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [name, setName] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "email" && !e.target.value.includes("@")) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-sky-100 to-blue-200 flex items-center justify-center p-6 gap-6">
      <form className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 w-full max-w-md shadow-xl space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Contact Us
        </h2>

        {/* Floating Label Input */}
        <div className="relative">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            required
            className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-6 pb-2 text-gray-700 placeholder-transparent focus:outline-none focus:border-blue-500 transition-all"
            placeholder="Your name"
          />
          <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500">
            Name
          </label>
        </div>

        {/* Floating Label Input */}
        <div className="relative">
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            required
            className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-6 pb-2 text-gray-700 placeholder-transparent focus:outline-none focus:border-blue-500 transition-all"
            placeholder="you@example.com"
          />
          <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500">
            Email
          </label>
        </div>

        {/* Floating Label Textarea */}
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-6 pb-2 text-gray-700 placeholder-transparent focus:outline-none focus:border-blue-500 transition-all resize-none"
            placeholder="Your message"
          />
          <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500">
            Message
          </label>
        </div>

        {/* Validation Message */}
        {error && (
          <div className="text-sm text-red-500 animate-pulse transition-opacity duration-300">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white py-2 rounded-xl hover:shadow-md hover:scale-105 transition-transform"
        >
          Send Message
        </button>
      </form>

      <div className="relative w-96 h-[400px] perspective">
        <div
          className={clsx(
            "absolute w-full h-full transition-transform duration-700 transform-style-preserve-3d",
            isFlipped ? "rotate-y-180" : ""
          )}
        >
          {/* Front (Login) */}
          <form className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-xl font-semibold text-center mb-6">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
              Login
            </button>
            <p
              className="text-sm mt-4 text-center text-blue-600 cursor-pointer"
              onClick={() => setIsFlipped(true)}
            >
              Don&apos;t have an account? Register
            </p>
          </form>

          {/* Back (Register) */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-xl font-semibold text-center mb-6">Register</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
            <button className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition">
              Register
            </button>
            <p
              className="text-sm mt-4 text-center text-indigo-600 cursor-pointer"
              onClick={() => setIsFlipped(false)}
            >
              Already have an account? Login
            </p>
          </div>
        </div>
      </div>

      <form className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6 transition duration-500 ease-in-out transform hover:scale-105">
        <h2 className="text-xl font-semibold text-center text-blue-600">
          Contact Us
        </h2>

        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-blue-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 
                       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Name
          </label>
        </div>

        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}
