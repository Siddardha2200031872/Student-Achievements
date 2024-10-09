import React, { useState } from 'react';

const AddEvent = ({ onAddEvent }) => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventImage, setEventImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new event object
    const newEvent = {
      id: Date.now(), // Unique ID
      image: eventImage,
      description: eventName + ': ' + eventDescription,
    };

    // Send new event back to parent (App.js)
    onAddEvent(newEvent);

    // Clear the form inputs
    setEventName('');
    setEventDescription('');
    setEventImage('');
  };

  return (
    <div>
      <h2>Add a New Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Event Name:</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Event Description:</label>
          <input
            type="text"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Event Image URL:</label>
          <input
            type="text"
            value={eventImage}
            onChange={(e) => setEventImage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
