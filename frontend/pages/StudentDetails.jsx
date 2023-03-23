import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom'

function StudentDetails() {
  const { enrollmentId } = useParams();
  const [studentDetails, setStudentDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/students/${enrollmentId}/`)
      .then((response) => {
        // Store response data in studentList variable
        setStudentDetails(response.data);
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
      <div style={{fontSize: '24px', fontWeight: 600}}>Student Details</div>
      { studentDetails ? 
        <div className="student-details-container">
          <div className='student-details-row'> <div> Enrollment Id : </div>     {studentDetails.enrollment_id}</div>
          <div className='student-details-row'> <div> Name : </div>  {studentDetails.name}</div>
          <div className='student-details-row'> <div> Gender :</div>  {studentDetails.gender}</div>
          <div className='student-details-row'> <div> Adhar Card Number :</div>  {studentDetails.adhar_card_number}</div>
          <div className='student-details-row'> <div> Dob :</div>  {studentDetails.dob}</div>
          <div className='student-details-row'> <div> Identification Marks :</div>  {studentDetails.identification_marks}</div>
          <div className='student-details-row'> <div> Category : </div>  {studentDetails.category}</div>
          <div className='student-details-row'> <div> height : </div>  {studentDetails.height}</div>
          <div className='student-details-row'> <div> weight :</div>  {studentDetails.weight}</div>
          <div className='student-details-row'> <div> Mail Id : </div>  {studentDetails.mail_id}</div>
          <div className='student-details-row'> <div> contact_detail : </div>  {studentDetails.contact_detail}</div>
          <div className='student-details-row'> <div> address :</div>  {studentDetails.address}</div>
          <div className='student-details-row'> <div> father_name </div>  {studentDetails.father_name}</div>
          <div className='student-details-row'> <div>  father_qualification</div>  {studentDetails.father_qualification}</div>
          <div className='student-details-row'> <div> father_profession</div>  {studentDetails.father_profession}</div>
          <div className='student-details-row'> <div> father_designation</div>  {studentDetails.father_designation}</div>
          <div className='student-details-row'> <div>father_aadhar_card </div>  {studentDetails.father_aadhar_card}</div>
          <div className='student-details-row'> <div>father_mobile_number </div>  {studentDetails.father_mobile_number}</div>
          <div className='student-details-row'> <div>father_mail_id </div>  {studentDetails.father_mail_id}</div>
          <div className='student-details-row'> <div> mother_name</div>  {studentDetails.mother_name}</div>
          <div className='student-details-row'> <div> mother_qualification</div>  {studentDetails.mother_qualification}</div>
          <div className='student-details-row'> <div> mother_qualification</div>  {studentDetails.mother_qualification}</div>
          <div className='student-details-row'> <div> mother_qualification</div>  {studentDetails.mother_qualification}</div>
          <div className='student-details-row'> <div>mother_aadhar_card </div>  {studentDetails.mother_aadhar_card}</div>
          <div className='student-details-row'> <div> mother_mobile_number</div>  {studentDetails.mother_mobile_number}</div>
          <div className='student-details-row'> <div>mother_mail_id </div>  {studentDetails.mother_mail_id}</div>
          <div className='student-details-row'> <div>class_name </div>  {studentDetails.class_name}</div>
        <div className='student-details-row'> <div>section </div>  {studentDetails.section}</div>
        <div className='student-details-row'> <div> doj</div>  {studentDetails.doj}</div>
        <div className='student-details-row'> <div>docs </div>  {studentDetails.docs}</div>
        </div>
       : <div>Loading .....</div>} 
    </>
  );
}

export default StudentDetails;
