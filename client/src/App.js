import React, { useState } from 'react';
import axios from 'axios';
// axios.defaults.withCredentials = true;
function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {

      await axios.post('http://localhost:5000/upload', formData);
      alert('File uploaded and saved to database.');
    } catch (error) {
      alert('An error occurred.');
    }
  };
  const showImage = async () => {
    try {
      
      const res = await fetch('http://localhost:5000/files', {
        method: 'POST',
        
          body: JSON.stringify({id:"64fc1322d3d577382c7abf1b"})
          });
          console.log(res);
      setSelectedFile(res.data)
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="App">
      <h1>File Upload Demo</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
      <img src={{selectedFile}+".jpg"} height={100} width={100} alt="clicked" />
      <button onClick={showImage}>image</button>
    </div>
  );
}

export default App;
