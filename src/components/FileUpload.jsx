import React, { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [resumeText, setResumeText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleUpload = async () => {

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
      setResumeText(data.content);
      console.log(data);

    } catch (error) {
      console.error(error);
      alert("Upload Failed");
    }
  };

  return (
    <>
      <div className="card">
        <h2>Upload Resume</h2>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <br /><br />

        <button onClick={handleUpload}>
          Upload Resume
        </button>
      
      <h3>Candidate Details</h3>

      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
      <div>
        <h3>Extracted Resume Text</h3>

        <textarea
          value={resumeText}
          readOnly
          rows="10"
          cols="60"
        />
      </div>
    </>
  );
}

export default FileUpload;