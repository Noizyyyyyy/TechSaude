export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">

      <div className="bg-slate-800 p-8 rounded-xl w-96">

        <h1 className="text-2xl mb-6 text-center font-semibold">
          Criar conta
        </h1>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Nome"
            className="w-full p-2 rounded bg-slate-700"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-slate-700"
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full p-2 rounded bg-slate-700"
          />

          <button className="w-full bg-indigo-500 p-2 rounded">
            Registrar
          </button>

        </form>

      </div>

    </div>
  );
}