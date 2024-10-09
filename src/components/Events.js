import React, { useState } from 'react';
import '../Events.css'; // Add your styles here
import GarudaImage from '../reducers/Images/Garuda.png';
import KlcodersImage from '../reducers/Images/Klcoders.png'; // Correct import
import RegisteredImage from '../reducers/Images/Register.png'; // Import registered image

const eventsData = [
  {
    id: 1,
    image: GarudaImage, // Use the imported image
    description: 'Entrepreneurship with Drones & Vulnerabilities in Cyber Airspace',
  },
  {
    id: 2,
    image: KlcodersImage, // Use the imported image
    description: 'Quick note on the academic & C language classes',
  },
  {
    id: 3,
    image: 'path/to/image3.jpg',
    description: 'Event 3: Description of event 3.',
  },
  // Add more events as needed
];

const Events = () => {
  return (
    <div className="events-container">
      {eventsData.length > 0 ? (
        eventsData.map(event => <EventCard key={event.id} event={event} />)
      ) : (
        <p>No events available</p>
      )}
    </div>
  );
};

const EventCard = ({ event }) => {
  const [registered, setRegistered] = useState(false);

  const handleRegister = () => {
    setRegistered(true);
  };

  const handleCancel = () => {
    setRegistered(false);
  };

  return (
    <div className="event-card">
      <img src={event.image} alt={`Event ${event.id}`} className="event-image" />
      <div className="event-description">{event.description}</div>
      <div className="registration-actions"> {/* Add a wrapper for actions */}
        {registered ? (
          <>
            <img src={RegisteredImage} alt="Registered" className="registered-image" /> {/* Display registered image */}
            <button onClick={handleCancel} className="cancel-button">
              Cancel Registration
            </button>
          </>
        ) : (
          <button onClick={handleRegister} className="register-button">
            Register
          </button>
        )}
      </div>
    </div>
  );
};

export default Events;
