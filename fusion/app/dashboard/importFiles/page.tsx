"use client";

import { useState } from "react";
import * as XLSX from "xlsx";

function App() {
  // onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

  // submit state
  const [excelData, setExcelData] = useState(null);

  // onchange event
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
        setTypeError("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      console.log("Please select your file");
    }
  };

  // submit event
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

  return (
    <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-md">
      <h3 className="text-2xl font-bold mb-4">Upload & View Excel Sheets</h3>

      {/* form */}
      <form className="flex items-center space-x-4" onSubmit={handleFileSubmit}>
        <input
          type="file"
          className="py-2 px-4 border border-gray-300 rounded-md"
          required
          onChange={handleFile}
        />
        <button
          type="submit"
          className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-400"
        >
          UPLOAD
        </button>
        {typeError && <div className="text-red-600">{typeError}</div>}
      </form>

      {/* view data */}
      <div className="mt-8">
        {excelData ? (
          <div className="table-responsive">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  {Object.keys(excelData[0]).map((key) => (
                    <th key={key} className="border px-4 py-2">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {excelData.map((individualExcelData, index) => (
                  <tr key={index}>
                    {Object.keys(individualExcelData).map((key) => (
                      <td key={key} className="border px-4 py-2">
                        {individualExcelData[key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>No File is uploaded yet!</div>
        )}
      </div>
    </div>
  );
}

export default App;
