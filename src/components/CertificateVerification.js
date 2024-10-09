import React, { useState } from 'react';
import '../CertificateVerification.css'; // Ensure this path is correct

function CertificateVerification() {
  const [certificateId, setCertificateId] = useState(''); // Store certificate ID
  const [verificationMessage, setVerificationMessage] = useState(''); // Store verification message
  const [loading, setLoading] = useState(false); // Loading state

  // Handle input change for certificate ID
  const handleInputChange = (event) => {
    setCertificateId(event.target.value);
  };

  // Handle verification process
  const handleVerify = async () => {
    setLoading(true); // Set loading to true while waiting for response
    try {
      const response = await fetch(`/verify?certificateId=${certificateId}`);
      const message = await response.text(); // Expecting a text response
      setVerificationMessage(message); // Set message based on response
    } catch (error) {
      setVerificationMessage('Failed to verify the certificate.');
    } finally {
      setLoading(false); // Stop loading after request completes
    }
  };

  return (
    <div className="certificate-verification-container">
      <h2>Certificate Verification</h2>
      <input
        type="text"
        value={certificateId}
        onChange={handleInputChange}
        placeholder="Enter Certificate ID"
        className="certificate-input"
      />
      <button onClick={handleVerify} className="verify-button" disabled={loading}>
        {loading ? 'Verifying...' : 'Verify'}
      </button>
      {verificationMessage && (
        <p className="verification-message">{verificationMessage}</p>
      )}
    </div>
  );
}

export default CertificateVerification;
