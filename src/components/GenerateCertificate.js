// src/components/GenerateCertificate.js
import React, { useState, useRef } from 'react';
import QRCode from 'qrcode';
import html2canvas from 'html2canvas';
import '../Certificate.css'; // Your CSS for styling the certificate

const GenerateCertificate = ({ studentName, eventName, certificateId }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const certificateRef = useRef(null);

  // Generate QR code with the certificate ID
  const generateQrCode = async (text) => {
    try {
      const url = await QRCode.toDataURL(text);
      setQrCodeUrl(url);
    } catch (error) {
      console.error('Failed to generate QR code:', error);
    }
  };

  // Call the function to generate the QR code on component mount
  React.useEffect(() => {
    generateQrCode(`http://your-verification-url.com/verify?certificateId=${certificateId}`);
  }, [certificateId]);

  // Function to download the certificate as an image
  const downloadCertificate = () => {
    html2canvas(certificateRef.current).then((canvas) => {
      const link = document.createElement('a');
      link.download = `${studentName}_certificate.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  return (
    <div className="certificate-container">
      <div ref={certificateRef} className="certificate-content">
        <h2>Certificate of Completion</h2>
        <p>This is to certify that</p>
        <h3>{studentName}</h3>
        <p>has successfully completed the event:</p>
        <h3>{eventName}</h3>

        {/* QR Code for verification */}
        <div className="qr-code">
          <img src={qrCodeUrl} alt="QR Code for Verification" />
        </div>
        <p>Scan the QR code to verify the certificate authenticity.</p>
      </div>
      
      {/* Download Button */}
      <button className="download-button" onClick={downloadCertificate}>
        Download Certificate
      </button>
    </div>
  );
};

export default GenerateCertificate;
