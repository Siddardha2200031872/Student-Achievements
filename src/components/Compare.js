import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../Compare.css'; // Ensure this file is created for styling

const Compare = () => {
  const [id1, setId1] = useState('');
  const [id2, setId2] = useState('');
  const [comparisonData, setComparisonData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Validate that the ID is exactly 10 digits
  const validateId = (id) => {
    const regex = /^\d{10}$/; // Regex for exactly 10 digits
    return regex.test(id);
  };

  const handleCompare = () => {
    // Validate both IDs
    if (!validateId(id1) || !validateId(id2)) {
      setErrorMessage('Each ID should be exactly 10 digits and contain no special characters or letters.');
      return;
    }

    // Mock data for demonstration purposes
    const mockData = {
      [id1]: {
        achievements: ['Achievement A1', 'Achievement A2'],
        count: 2,
      },
      [id2]: {
        achievements: ['Achievement B1', 'Achievement B2', 'Achievement B3'],
        count: 3,
      },
    };
    
    setComparisonData(mockData);
    setErrorMessage(''); // Clear any previous error messages
  };

  return (
    <div className="compare-container">
      <div className="left-column">
        {/* Navigation Blocks */}
        <Link to="/" className="block">Home</Link>
        <Link to="/events" className="block">Events</Link>
        <Link to="/achievements" className="block">Achievements</Link>
        <Link to="/compare" className="block">Compare</Link>
        <Link to="/student-info" className="block">Student Info</Link>
      </div>
      <div className="right-column">
        <h1>Compare Achievements</h1>
        <div className="input-container">
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your ID number"
              value={id1}
              onChange={(e) => setId1(e.target.value)}
              className="id-input"
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter another ID number"
              value={id2}
              onChange={(e) => setId2(e.target.value)}
              className="id-input"
            />
          </div>
        </div>
        <button onClick={handleCompare} className="compare-button">Compare</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        
        {comparisonData && (
          <div className="comparison-results">
            <h2>Comparison Results</h2>
            <div className="results">
              <div className="result-item">
                <h3>ID: {id1}</h3>
                <p>Achievements: {comparisonData[id1]?.achievements.join(', ')}</p>
                <p>Count: {comparisonData[id1]?.count}</p>
              </div>
              <div className="result-item">
                <h3>ID: {id2}</h3>
                <p>Achievements: {comparisonData[id2]?.achievements.join(', ')}</p>
                <p>Count: {comparisonData[id2]?.count}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Compare;
