import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Index() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Senha:", password);

    alert("Login realizado!");

    router.push("/homepage");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-gray-200 relative overflow-hidden">
      
      {/* VIDEO BACKGROUND */}
      <video autoPlay muted loop playsInline className="video-background">
  <source src="/background.mp4" type="video/mp4" />
</video>

<div className="video-overlay"></div>
      {/* OVERLAY ESCURO */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>

      {/* LOGIN BOX */}
      <div className="w-full max-w-md bg-slate-800/90 backdrop-blur-md p-8 rounded-xl shadow-xl relative z-10">

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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 bg-slate-700 rounded-md border border-slate-600 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              required
              minLength="6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 bg-slate-700 rounded-md border border-slate-600 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition"
          >
            Sign in
          </button>

        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Não tem uma conta?{" "}
          <Link href="/register" className="text-indigo-400 hover:underline">
            Registrar-se
          </Link>
        </p>

      </div>

    </div>
  );
}