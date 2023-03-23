// import React, {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'


// function UploadCSV() {
//     [ csvfile , setCSVFile] = useState('')

//     axios.post('http://127.0.0.1:8000/api/csv-upload/', csvfile).then((response) => {
//       console.log(response.data);
//     }).catch((error) => {
//       console.error(error);
//     });
//   };
//   return (
//     <>
//     <div style={{ width: "100vw" }}>
//       <div className="top-bar">
//         <Link to={`/`} >
//             <button>Registration Form</button>
//         </Link>
//         <Link to={`/students`} >
//             <button>Student List</button>
//         </Link>
//         <Link to={`/uploadCSV`} >
//             <button>Upload CSV File here</button>
//         </Link>
//       </div>
//       </div>
//     <div>UploadCSV</div>
// <form>
//   <input type="file" id="csvFile" name="csvFile" />
//   <button type="submit">Submit</button>
// </form>
// <div>

// </div>
// </>
//   )
// }

// export default UploadCSV


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function UploadCSV() {
  const [csvFile, setCSVFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('csvFile', csvFile);
    console.log('bug' , formData )

    axios.post('http://127.0.0.1:8000/api/upload-csv/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }})
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div style={{ width: "100vw" }}>
        <div className="top-bar">
          <Link to={`/`} >
            <button>Registration Form</button>
          </Link>
          <Link to={`/students`} >
            <button>Student List</button>
          </Link>
          <Link to={`/uploadCSV`} >
            <button>Upload CSV File here</button>
          </Link>
        </div>
      </div>
      <div>UploadCSV</div>
      <form onSubmit={handleSubmit}>
        <input type="file" id="csvFile" name="csvFile" onChange={(e) => setCSVFile(e.target.files[0])} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UploadCSV;
