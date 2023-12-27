"use client";

import { useState } from "react";
import * as XLSX from "xlsx";

function App() {
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [excelData, setExcelData] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(null);

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
        setTypeError("Please select only Excel file types");
        setExcelFile(null);
      }
    } else {
      console.log("Please select your file");
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

  const handleColumnSelect = (e) => {
    setSelectedColumn(e.target.value);
  };

  return (
    <div className="wrapper bg-gray-100 p-8">
      <h3 className="text-3xl font-bold mb-6">Upload & View Excel Sheets</h3>

      <form className="form-group custom-form" onSubmit={handleFileSubmit}>
        <input
          type="file"
          className="form-control border rounded p-2"
          required
          onChange={handleFile}
        />
        <button
          type="submit"
          className="btn btn-success btn-md mt-2 p-2 rounded"
        >
          UPLOAD
        </button>
        {typeError && (
          <div className="alert alert-danger mt-2" role="alert">
            {typeError}
          </div>
        )}
      </form>

      {excelData && (
        <div>
          <label htmlFor="columnDropdown">Selecione uma coluna:</label>
          <select
            id="columnDropdown"
            name="column"
            onChange={handleColumnSelect}
            value={selectedColumn}
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
    </div>
  );
}

export default App;
