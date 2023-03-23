import React, { useState, useEffect } from "react";
import axios from "axios";
import ListItem from "../src/components/ListItem";
import { Link } from 'react-router-dom'

function StudentList() {
  const [studentList, setStudentList] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/students/")
      .then((response) => {
        // Store response data in studentList variable
        setStudentList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
      <div>StudentList</div>
      <div >


        <table className="form-table">
            <tr>
                <th>Enrollment ID</th>
                <th>student Name</th>
                <th>class</th>
                <th>Section</th>
                <th>Details</th>
            </tr>
        { studentList ? studentList.map((item) => (
            <tr>

          <ListItem key={item.enrollment_id} item={item} />
            </tr>
        )) : <div>Loading.....</div>}    
        </table>
      </div>
    </>
  );
}

export default StudentList;
