"use client";

import { FaUpload, FaTable, FaComments } from "react-icons/fa";
import Link from "next/link";
import { ThemeProvider } from "@/app/context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="wrapper p-8 bg-white">
        <h3 className="text-3xl font-bold mb-6 text-primary">
          Dashboard de Análise de Dados
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/dashboard/importFiles">
            <div className="p-4 bg-blue-500 rounded-md text-white flex items-center justify-center">
              <label
                htmlFor="fileInput"
                className="cursor-pointer flex flex-col items-center"
              >
                <FaUpload className="text-4xl mb-2" />
                <div>Upload de Arquivo</div>
              </label>
            </div>
          </Link>

          <Link href="/dashboard/viewFiles">
            <div className="p-4 bg-green-500 rounded-md text-white flex items-center justify-center">
              <label
                htmlFor="fileInput"
                className="cursor-pointer flex flex-col items-center"
              >
                <FaTable className="text-4xl mb-2" />
                <div>Visualizar Tabela</div>
              </label>
            </div>
          </Link>

          <div className="p-4 bg-purple-500 rounded-md text-white flex items-center justify-center">
            <label
              htmlFor="fileInput"
              className="cursor-pointer flex flex-col items-center"
            >
              <FaComments className="text-4xl mb-2" />
              <div>Chat com OpenAI</div>
            </label>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-200 rounded-md">
            {/* Placeholder for future chart */}
          </div>

          <div className="p-4 bg-gray-200 rounded-md">
            {/* Placeholder for future chart */}
          </div>

          <div className="p-4 bg-gray-200 rounded-md">
            <div className="text-xl font-bold mb-2">Dados Informativos</div>
            <p>Número total de projetos: 100</p>
            <p>Projetos de Machine Learning: 40</p>
            <p>Projetos de Data Visualization: 30</p>
            <p>Projetos de Data Analysis: 30</p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
