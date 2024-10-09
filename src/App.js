import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import StudentDetails from './components/StudentDetails';
import CharanHome from './components/CharanHome';
import Events from './components/Events'; // Add the Events component
import AddEvent from './components/AddEvent'; // Import AddEvent
import Achievements from './components/Achievements'; // Add Achievements component
import Compare from './components/Compare'; // Add Compare component
import StudentInfo from './components/StudentInfo'; // Add StudentInfo component
import { useState } from 'react'; // For managing state
import CertificateVerification from './components/CertificateVerification';

function App() {
  const [events, setEvents] = useState([
    {
      id: 1,
      image: 'path/to/image1.jpg', // Replace with real image paths
      description: 'Event 1: Description of event 1.',
    },
    {
      id: 2,
      image: 'path/to/image2.jpg',
      description: 'Event 2: Description of event 2.',
    }
  ]);

  // Function to add a new event
  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const isLoggedIn = false; // Example state for logged in check

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="navbar">
            <div className="navbar-left">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Student Extracurricular Achievements</h1>
            </div>
            <div className="navbar-right">
              {isLoggedIn ? (
                <Link to="/charanhome">Logout</Link> // Only show Logout when logged in
              ) : (
                <>
                  <Link to="/">Home</Link>
                  <Link to="/signin">Sign In</Link>
                  <Link to="/signup">Sign Up</Link>
                  <Link to="/events">Events</Link>
                  <Link to="/add-event">Add Event</Link> {/* Add link to add events */}
                  <Link to="/verify-certificate">Verify Certificate</Link> {/* Add link here */}
                </>
              )}
            </div>
          </div>
        </header>
        <div className="App-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/student-details" element={<StudentDetails />} />
            <Route path="/skhome" element={<CharanHome />} />
            <Route path="/events" element={<Events events={events} />} /> {/* Pass events to Events component */}
            <Route path="/add-event" element={<AddEvent onAddEvent={addEvent} />} /> {/* AddEvent route */}
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/student-info" element={<StudentInfo />} />
            <Route path="/certificate-verification" element={<CertificateVerification />} />
            <Route path="*" element={<h2>404 Not Found</h2>} />
          </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
