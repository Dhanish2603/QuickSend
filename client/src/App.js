import {useRef, useState }from "react"
import './App.css';

function App() {
  const fileData = useRef();
  const [file, setFile] = useState()
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };
  const submitHanlder = (e) => {
    e.preventDefault();
    console.log('Uploading file:', file.name);
  };
  return (
    <div className="App">
      
        <label htmlFor="">file upload</label>
        <input type="file" name="file" id="" onChange={handleFileChange}/>
        <button onClick = {submitHanlder}>Click to upload</button>
      
    </div>
  );
}

export default App;