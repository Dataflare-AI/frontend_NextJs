"use client";

import { FaUpload, FaTable, FaComments } from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";
import Chart from "chart.js/auto";

function App() {
  // Dados fictícios para o gráfico de barras
  const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Número de Projetos",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [15, 22, 18, 25, 20],
      },
    ],
  };

  // Dados fictícios para o gráfico de pizza
  const pieChartData = {
    labels: ["Machine Learning", "Data Visualization", "Data Analysis"],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Função para criar gráfico de barras
  const createBarChart = (chartData, canvasId) => {
    const canvas = document.getElementById(canvasId);

    if (canvas) {
      const ctx = canvas.getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: chartData,
      });
    } else {
      console.error(`Canvas element with ID '${canvasId}' not found`);
    }
  };

  // Função para criar gráfico de pizza
  const createPieChart = (chartData, canvasId) => {
    const canvas = document.getElementById(canvasId);

    if (canvas) {
      const ctx = canvas.getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: chartData,
      });
    } else {
      console.error(`Canvas element with ID '${canvasId}' not found`);
    }
  };

  useEffect(() => {
    createBarChart(barChartData, "barChartCanvas");
    createPieChart(pieChartData, "pieChartCanvas");
  }, []); // Executar uma vez ao montar o componente

  return (
    <div className="wrapper p-8 bg-white">
      <h3 className="text-3xl font-bold mb-6 text-gray-800">
        Dashboard de Análise de Dados em Python
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
          <canvas id="barChartCanvas" width="400" height="200"></canvas>
        </div>

        <div className="p-4 bg-gray-200 rounded-md">
          <canvas id="pieChartCanvas" width="400" height="200"></canvas>
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
  );
}

export default App;
