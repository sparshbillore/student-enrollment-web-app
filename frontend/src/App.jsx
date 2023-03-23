import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Registration from '../pages/Registration'
import StudentList from '../pages/StudentList'
import StudentDetails from '../pages/StudentDetails'
import UploadCSV from '../pages/UploadCSV'


function App() {


  return (
    <>
    <Router>
      <div >
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='/students' element= {<StudentList />}  />
          <Route path='/uploadCSV' element= {<UploadCSV />}  />
          <Route path='/students/:enrollmentId' element = {<StudentDetails />} />
        </Routes>
      </div>
    </Router>
    
  </>
  )
}

export default App
