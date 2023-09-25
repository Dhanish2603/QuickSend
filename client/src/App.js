import React, { useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";
function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const ans = await axios.post("http://localhost:5000/upload", formData);
      console.log(ans.data.id);
      alert(`https://localhost:3000/image/${ans.data.id}`);
    } catch (error) {
      alert("An error occurred.");
    }
  };
  const showImage = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/files`, {
        responseType: "arraybuffer",
      });
      const base64Image = Buffer.from(response.data, "binary").toString(
        "base64"
      );
      setSelectedFile(`${base64Image}`);
      console.log(selectedFile);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>File Upload Demo</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
      <img
        src={`data:image/png;base64,${selectedFile}`}
        height={100}
        width={100}
        alt="clicked"
      />
      {selectedFile && (
        <img
          src={selectedFile}
          height={100}
          width={100}
          alt="working"
          srcset=""
        />
      )}
      <button onClick={showImage}>image</button>
    </div>
  );
}

export default App;
