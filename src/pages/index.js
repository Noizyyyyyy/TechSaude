"use client";

import { useState } from "react";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Senha:", password);

    alert("Login enviado!");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-gray-200">

      <div className="w-full max-w-md bg-slate-800 p-8 rounded-xl shadow-lg">

        <div className="flex justify-center mb-6">
          <div className="text-indigo-400 text-3xl font-bold">~</div>
        </div>

        <h2 className="text-center text-xl font-semibold mb-6">
          Sign in to your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          {/* Email */}
          <div>
            <label className="text-sm">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 bg-slate-700 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 bg-slate-700 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-indigo-500" />
              Remember me
            </label>

            <a href="#" className="text-indigo-400 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition"
          >
            Sign in
          </button>

        </form>

      </div>

    </div>
  );
}