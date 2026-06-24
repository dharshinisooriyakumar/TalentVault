import React, { useState } from "react";

function JsonTable() {
  const [data, setData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target.result);
        setData(jsonData);
      } catch (error) {
        alert("Invalid JSON file");
      }
    };

    reader.readAsText(file);
  };

  return (
    <div className="container mt-4">
      <h2>Upload JSON File</h2>

      <input
        type="file"
        accept=".json"
        className="form-control mb-3"
        onChange={handleFileUpload}
      />

      {data.length > 0 && (
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default JsonTable;
