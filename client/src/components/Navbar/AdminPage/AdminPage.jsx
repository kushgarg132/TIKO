import React, { useState } from "react";
import * as XLSX from "xlsx";
import "./AdminPage.css";

function AdminPage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setMessage("");
  };

  const handleUpload = () => {
    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryString = event.target.result;
      const workbook = XLSX.read(binaryString, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      console.log(data);
    };
    reader.readAsBinaryString(file);
  };

  const handleDelete = () => {
    setFile(null);
    setMessage("");
  };

  return (
    <div className="admin-container">
      <div className="admin-page">
        <h1>Admin Page</h1>
        <div className="file-upload">
          <input type="file" accept=".csv, .xlsx" onChange={handleFileUpload} />
          <button onClick={handleUpload}>Upload</button>
        </div>
        <div className="message">{message}</div>
        {file && (
          <div className="file-info">
            <p>
              Selected file: <strong>{file.name}</strong>
            </p>
            <button onClick={handleDelete}>Delete file</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
