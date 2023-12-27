"use client";

  import { useState } from "react";
  import * as XLSX from "xlsx";

  function App() {
    const [excelFile, setExcelFile] = useState(null);
    const [typeError, setTypeError] = useState(null);
    const [excelData, setExcelData] = useState(null);
    const [selectedColumn, setSelectedColumn] = useState(null);
    const [chatPrompt, setChatPrompt] = useState("");

    const handleFile = (e) => {
      let fileTypes = [
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "text/csv",
      ];
      let selectedFile = e.target.files[0];

      if (selectedFile) {
        if (selectedFile && fileTypes.includes(selectedFile.type)) {
          setTypeError(null);
          let reader = new FileReader();
          reader.readAsArrayBuffer(selectedFile);
          reader.onload = (e) => {
            setExcelFile(e.target.result);
          };
        } else {
          setTypeError("Por favor, selecione apenas arquivos do tipo Excel");
          setExcelFile(null);
        }
      } else {
        console.log("Por favor, selecione seu arquivo");
      }
    };

    const handleFileSubmit = (e) => {
      e.preventDefault();
      if (excelFile !== null) {
        const workbook = XLSX.read(excelFile, { type: "buffer" });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);
        setExcelData(data.slice(0, 10));
      }
    };

    const sendMessageToOpenAI = () => {
      // Implemente a lógica para enviar a mensagem para a API da OpenAI
      // e receber a resposta do ChatGPT aqui
      console.log(`Mensagem enviada para a OpenAI: ${chatPrompt}`);
      // A resposta do ChatGPT será tratada aqui
      // (quando a integração com a API da OpenAI estiver pronta)
    };

    const handleColumnSelect = (e) => {
      setSelectedColumn(e.target.value);

      // Adicione a lógica para rolar até o final da página apenas em telas maiores que 768 pixels
      if (window.innerWidth > 768) {
        const dropdownScrollOptions = {
          top: document.getElementById("columnDropdown").offsetTop,
          behavior: "smooth",
        };
        window.scrollTo(dropdownScrollOptions);
      }
    };

    return (
      <div className="wrapper p-8 bg-white">
        <h3 className="text-3xl font-bold mb-6">
          Importar & Visualizar Arquivos
        </h3>

        <form className="form-group custom-form" onSubmit={handleFileSubmit}>
          <input
            type="file"
            className="form-control border rounded p-2"
            required
            onChange={handleFile}
          />
          <button
            type="submit"
            className="px-6 py-2 hover:bg-white hover:border-black hover:text-black hover:transition-colors bg-black text-white border border-transparent transition-border rounded-md md:ml-5 w-40 text-center"
          >
            IMPORTAR
          </button>
          {typeError && (
            <div className="alert alert-danger mt-2" role="alert">
              {typeError}
            </div>
          )}
        </form>

        {excelData && (
          <div className="mt-4">
            <label htmlFor="columnDropdown" className="text-lg">
              Selecione uma coluna:
            </label>
            <select
              id="columnDropdown"
              name="column"
              onChange={handleColumnSelect}
              value={selectedColumn}
              className="border rounded p-2 max-w-xs"
            >
              {Object.keys(excelData[0]).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>

            <div className="viewer mt-4">
              <div className="table-responsive">
                <table className="table border-collapse border w-full">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border p-2">{selectedColumn}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {excelData.map((individualExcelData, index) => (
                      <tr key={index}>
                        <td className="border p-2">
                          {individualExcelData[selectedColumn]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {selectedColumn && (
          <div className="mt-4">
            <label htmlFor="chatPrompt" className="text-lg mr-2">
              Prompt do Chat:
            </label>
            <textarea
              id="chatPrompt"
              placeholder={`Digite sua mensagem relacionada a ${selectedColumn}`}
              className="border rounded p-2 my-2 w-full"
              value={chatPrompt}
              onChange={(e) => setChatPrompt(e.target.value)}
              rows="6"
            />
            <button
              type="button"
              className="hover:bg-black hover:border-black hover:text-white bg-white text-black border border-black transition-all rounded-md md:ml-0 text-center px-4 py-2 "
              onClick={sendMessageToOpenAI}
            >
              Enviar Mensagem
            </button>
          </div>
        )}
      </div>
    );
  }

  export default App;
