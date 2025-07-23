'use client';

import { useState } from 'react';

export default function ModernForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'email' && !e.target.value.includes('@')) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-sky-100 to-blue-200 flex items-center justify-center p-6">
      <form className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 w-full max-w-md shadow-xl space-y-6">
        
        <h2 className="text-2xl font-semibold text-center text-gray-800">Contact Us</h2>

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
          <label
            className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
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
          <label
            className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
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
          <label
            className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
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
    </div>
  );
}
