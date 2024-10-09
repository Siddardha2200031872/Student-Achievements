import React from 'react';
import { useLocation } from 'react-router-dom';
import '../StudentDetails.css';

function StudentDetails() {
  const location = useLocation();
  const { student } = location.state || {};

  if (!student) {
    return <div>No student details available</div>;
  }

  const { studentId, studentName, phoneNumber, year, branch, passingYear, imageUrl } = student;

  return (
    <div className="student-details-container">
      <div className="student-info">
        <p>Student ID: {studentId}</p>
        <p>Name: {studentName}</p>
        <p>Phone Number: {phoneNumber}</p>
        <p>Year: {year}</p>
        <p>Branch: {branch}</p>
        <p>Passing Year: {passingYear}</p>
      </div>
      <div className="student-image">
        <img src={imageUrl} alt={`${studentName}'s profile`} />
      </div>
    </div>
  );
}

export default StudentDetails;
