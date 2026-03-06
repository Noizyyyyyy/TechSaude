"use client";

import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function handleRegister(e) {
    e.preventDefault();

    console.log(name, email, password);

    alert("Conta criada!");

    router.push("/homepage");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">

      <div className="bg-slate-800 p-8 rounded-xl w-96">

        <h1 className="text-2xl mb-6 text-center font-semibold">
          Criar conta
        </h1>

        <form className="space-y-4" onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full p-2 rounded bg-slate-700"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-2 rounded bg-slate-700"
            required
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-2 rounded bg-slate-700"
            required
          />

          <button className="w-full bg-indigo-500 p-2 rounded">
            Registrar
          </button>

        </form>

      </div>

    </div>
  );
}