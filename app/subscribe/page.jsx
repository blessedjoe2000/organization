"use client";

import { useState } from "react";

export default function Subscribe() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        <p className="text-2xl font-semibold mb-6 text-center">
          Subscribe to our list
        </p>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="mobile" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter Phone Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-red-600 rounded-lg text-white font-medium hover:bg-red-700 transition"
        >
          <div className="flex justify-center items-center gap-2">
            Subscribe
          </div>
        </button>
      </form>
    </div>
  );
}
