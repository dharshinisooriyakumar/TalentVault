import React, { useState } from "react";

function FileUpload() {
  const [fileData, setFileData] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setFileData(e.target.result);
      };

      reader.readAsText(file);
    }
  };

  return (
    <div>
      <h2>File Upload Demo</h2>

      <input
        type="file"
        accept=".txt"
        onChange={handleFileUpload}
      />

      <h3>Uploaded File Data:</h3>
      <pre>{fileData}</pre>
    </div>
  );
}

export default FileUpload;