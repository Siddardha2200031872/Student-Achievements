import React, { useState } from 'react';
import '../Achievements.css'; // Make sure to create this CSS file for styling

function Achievements() {
  const [studentId, setStudentId] = useState('');
  const [achievements, setAchievements] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setStudentId(event.target.value);
    setError(''); // Clear any previous error
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (studentId.length !== 10 || !/^\d+$/.test(studentId)) {
      setError('ID should be exactly 10 digits without any special characters or alphabets.');
      return;
    }

    try {
      // Mock API call to fetch achievements
      const response = await fetch(`http://localhost:5000/api/achievements/${studentId}`);
      const data = await response.json();

      if (response.ok) {
        setAchievements(data.achievements || []); // Assuming the response has a key 'achievements'
      } else {
        setError('No achievements found for this ID.');
        setAchievements([]); // Clear achievements on error
      }
    } catch (error) {
      console.error('Error fetching achievements:', error);
      setError('Failed to fetch achievements. Please try again later.');
    }
  };

  return (
    <div className="achievements-container">
      <h2>Enter Student ID to View Achievements</h2>
      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          value={studentId}
          onChange={handleInputChange}
          className="id-input"
          placeholder="Enter Student ID (10 digits)"
          required
        />
        <button type="submit" className="view-button">View Achievements</button>
        {error && <div className="error-message">{error}</div>}
      </form>

      <div className="achievements-results">
        {achievements.length > 0 ? (
          <ul>
            {achievements.map((achievement, index) => (
              <li key={index} className="achievement-item">
                {achievement}
              </li>
            ))}
          </ul>
        ) : (
          <p>No achievements to display.</p>
        )}
      </div>
    </div>
  );
}

export default Achievements;
