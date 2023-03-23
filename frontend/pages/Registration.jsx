import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    adhar_card_number: "",
    dob: "",
    identification_marks: "",
    category: "",
    height: "",
    weight: "",
    mail_id: "",
    contact_detail: "",
    address: "",
    father_name: "",
    father_qualification: "",
    father_profession: "",
    father_designation: "",
    father_aadhar_card: "",
    father_mobile_number: "",
    father_mail_id: "",
    mother_name: "",
    mother_qualification: "",
    mother_profession: "",
    mother_designation: "",
    mother_aadhar_card: "",
    mother_mobile_number: "",
    mother_mail_id: "",
    class_name: "",
    section: "",
    doj: "",
    docs: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('bhai',formData)
    
    axios.post('http://127.0.0.1:8000/api/students/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.error(error);
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFormData({ ...formData, docs: selectedFile });
    }
  };

 
  return (
    
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
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            required
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="adhar_card_number">Adhar Card Number:</label>
          <input
            type="text"
            id="adhar_card_number"
            name="adhar_card_number"
            value={formData.adhar_card_number}
            onChange={(e) =>
              setFormData({ ...formData, adhar_card_number: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="identification_marks">Identification Marks:</label>
          <textarea
            id="identification_marks"
            name="identification_marks"
            value={formData.identification_marks}
            onChange={(e) =>
              setFormData({ ...formData, identification_marks: e.target.value })
            }
          ></textarea>
        </div>

        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="">Select category</option>
            <option value="General">General</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="OBC">OBC</option>
            <option value="EWS">EWS</option>
          </select>
        </div>

        <div>
          <label htmlFor="height">Height:</label>
          <input
            type="text"
            id="height"
            name="height"
            value={formData.height}
            onChange={(e) =>
              setFormData({ ...formData, height: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="weight">Weight:</label>
          <input
            type="text"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={(e) =>
              setFormData({ ...formData, weight: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="mail_id">Email:</label>
          <input
            type="email"
            id="mail_id"
            name="mail_id"
            value={formData.mail_id}
            onChange={(e) =>
              setFormData({ ...formData, mail_id: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="contact_detail">Contact Number:</label>
          <input
            type="text"
            id="contact_detail"
            name="contact_detail"
            value={formData.contact_detail}
            onChange={(e) =>
              setFormData({ ...formData, contact_detail: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          ></textarea>
        </div>

        <div>
          <label htmlFor="father_name">Father's Name:</label>
          <input
            type="text"
            id="father_name"
            name="father_name"
            value={formData.father_name}
            onChange={(e) =>
              setFormData({ ...formData, father_name: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="father_qualification">Father's Qualification:</label>
          <input
            type="text"
            id="father_qualification"
            name="father_qualification"
            value={formData.father_qualification}
            onChange={(e) =>
              setFormData({ ...formData, father_qualification: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="father_profession">Father's Profession:</label>
          <input
            type="text"
            id="father_profession"
            name="father_profession"
            value={formData.father_profession}
            onChange={(e) =>
              setFormData({ ...formData, father_profession: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="father_designation">Father's Designation:</label>
          <input
            type="text"
            id="father_designation"
            name="father_designation"
            value={formData.father_designation}
            onChange={(e) =>
              setFormData({ ...formData, father_designation: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="father_aadhar_card">
            Father's Aadhar Card Number:
          </label>
          <input
            type="text"
            id="father_aadhar_card"
            name="father_aadhar_card"
            value={formData.father_aadhar_card}
            onChange={(e) =>
              setFormData({ ...formData, father_aadhar_card: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="father_mobile_number">Father's Mobile Number:</label>
          <input
            type="text"
            id="father_mobile_number"
            name="father_mobile_number"
            value={formData.father_mobile_number}
            onChange={(e) =>
              setFormData({ ...formData, father_mobile_number: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="father_mail_id">Father's Email:</label>
          <input
            type="email"
            id="father_mail_id"
            name="father_mail_id"
            value={formData.father_mail_id}
            onChange={(e) =>
              setFormData({ ...formData, father_mail_id: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="mother_name">Mother's Name:</label>
          <input
            type="text"
            id="mother_name"
            name="mother_name"
            value={formData.mother_name}
            onChange={(e) =>
              setFormData({ ...formData, mother_name: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="mother_qualification">Mother's Qualification:</label>
          <input
            type="text"
            id="mother_qualification"
            name="mother_qualification"
            value={formData.mother_qualification}
            onChange={(e) =>
              setFormData({ ...formData, mother_qualification: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="mother_profession">Mother's Profession:</label>
          <input
            type="text"
            id="mother_profession"
            name="mother_profession"
            value={formData.mother_profession}
            onChange={(e) =>
              setFormData({ ...formData, mother_profession: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="mother_designation">Mother's Designation:</label>
          <input
            type="text"
            id="mother_designation"
            name="mother_designation"
            value={formData.mother_designation}
            onChange={(e) =>
              setFormData({ ...formData, mother_designation: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="mother_aadhar_card">
            Mother's Aadhar Card Number:
          </label>
          <input
            type="text"
            id="mother_aadhar_card"
            name="mother_aadhar_card"
            value={formData.mother_aadhar_card}
            onChange={(e) =>
              setFormData({ ...formData, mother_aadhar_card: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="mother_mobile_number">Mother's Mobile Number:</label>
          <input
            type="text"
            id="mother_mobile_number"
            name="mother_mobile_number"
            value={formData.mother_mobile_number}
            onChange={(e) =>
              setFormData({ ...formData, mother_mobile_number: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="mother_mail_id">Mother's Email:</label>
          <input
            type="email"
            id="mother_mail_id"
            name="mother_mail_id"
            value={formData.mother_mail_id}
            onChange={(e) =>
              setFormData({ ...formData, mother_mail_id: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="class_name">Class Name:</label>
          <input
            type="text"
            id="class_name"
            name="class_name"
            value={formData.class_name}
            onChange={(e) =>
              setFormData({ ...formData, class_name: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="section">Section:</label>
          <input
            type="text"
            id="section"
            name="section"
            value={formData.section}
            onChange={(e) =>
              setFormData({ ...formData, section: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="doj">Date of Joining:</label>
          <input
            type="date"
            id="doj"
            name="doj"
            value={formData.doj}
            onChange={(e) => setFormData({ ...formData, doj: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="docs">Upload Documents:</label>
          <input
            type="file"
            id="docs"
            name="docs"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
          />
        </div>

        <button type="submit" className="form-sub-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;
