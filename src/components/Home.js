import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home.css';
import axios from 'axios';

// Import images
import StudentImage from '../reducers/Images/Student.png';
import FallbackImage from '../reducers/Images/student2.png'; // The fallback image

function Home() {
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentImage, setStudentImage] = useState(StudentImage); // Set default image to Student.png
  const [errorMessage, setErrorMessage] = useState('');
  const [notFoundMessage, setNotFoundMessage] = useState(''); // Message for student not found
  const navigate = useNavigate();

  // Sample data for counts
  const dataCounts = {
    students: 120,
    employees: 25,
    projects: 15,
    totalPassed: 100,
  };

  // Debounced function to fetch student details
  const fetchStudentDetails = async (id) => {
    if (!id) {
      setStudentImage(StudentImage); // Reset to default image
      setStudentName('');
      setNotFoundMessage('');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5000/api/student/${id}`);
      const { name, image } = response.data;

      if (name) {
        setStudentName(name);
        setStudentImage(image || FallbackImage); // Use provided image or fallback
        setNotFoundMessage(''); // Clear not found message
      } else {
        setNotFoundMessage('No Student available with this ID');
        setStudentName(''); // Clear student name if not found
        setStudentImage(FallbackImage); // Set to fallback image when student is not found
      }
    } catch (error) {
      console.error("Error fetching student details:", error);
      setNotFoundMessage('No Student available with this ID');
      setStudentName(''); // Clear student name if not found
      setStudentImage(FallbackImage); // Set to fallback image when there is an error
    }
  };

  // Debounce function to prevent excessive API calls
  const debounce = (func, delay) => {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  // Create a debounced version of the fetch function
  const debouncedFetch = debounce(fetchStudentDetails, 500);

  // Handle student ID input change
  const handleInputChange = (e) => {
    const id = e.target.value;
    setStudentId(id);
    setErrorMessage('');
    setNotFoundMessage(''); // Reset not found message
    debouncedFetch(id); // Call the debounced fetch function
  };

  return (
    <div className="home-container">
      <div className="home-left">
        <h1 className="home-title">Celebrating Student Achievements: A Comprehensive Overview</h1>
        <p className="home-subtitle">Unlock the Full Potential of Your Students with Our Extracurricular Achievement Platform</p>

        <div className="image-box">
          <img 
            src={studentImage} // Use the student image based on the response
            alt={studentName} 
            className="student-image" 
          />
        </div>

        <div className="input-container">
          <input
            type="text"
            id="student-id"
            value={studentId}
            onChange={handleInputChange}
            className="student-id-input"
            placeholder="Enter Student ID"
          />
        </div>
        
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        
        <p className="student-name-display">
          Student Name: {studentName} {notFoundMessage && <span className="not-found-message">({notFoundMessage})</span>}
        </p>
      </div>

    </div>
  );
}

export default Home;
