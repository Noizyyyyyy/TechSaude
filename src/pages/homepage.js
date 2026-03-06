export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">

      {/* Navbar */}
      <header className="w-full bg-slate-800 p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold text-indigo-400">
          Sistema de Locação de Equipamentos
        </h1>

        <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
          Sair
        </button>
      </header>

      {/* Conteúdo */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6">

        <h2 className="text-4xl font-bold mb-4">
          Bem-vindo ao sistema 🚀
        </h2>

        <p className="text-gray-400 mb-10">
          Gerencie e alugue equipamentos de forma rápida e fácil.
        </p>

        {/* Botões principais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-slate-800 p-6 rounded-xl shadow-lg w-64">
            <h3 className="text-xl font-semibold mb-2">
              📦 Equipamentos
            </h3>
            <p className="text-gray-400 mb-4">
              Ver todos os equipamentos disponíveis.
            </p>
            <button className="w-full bg-indigo-500 py-2 rounded hover:bg-indigo-600">
              Ver equipamentos
            </button>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl shadow-lg w-64">
            <h3 className="text-xl font-semibold mb-2">
              📝 Nova locação
            </h3>
            <p className="text-gray-400 mb-4">
              Registrar o aluguel de um equipamento.
            </p>
            <button className="w-full bg-green-500 py-2 rounded hover:bg-green-600">
              Alugar equipamento
            </button>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl shadow-lg w-64">
            <h3 className="text-xl font-semibold mb-2">
              📊 Relatórios
            </h3>
            <p className="text-gray-400 mb-4">
              Visualizar locações realizadas.
            </p>
            <button className="w-full bg-purple-500 py-2 rounded hover:bg-purple-600">
              Ver relatórios
            </button>
          </div>

        </div>

      </main>

    </div>
  );
}