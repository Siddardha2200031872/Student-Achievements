const express = require('express');
const app = express();

app.get('/verify', (req, res) => {
  const { certificateId } = req.query;

  // Mock database for valid certificates
  const validCertificates = ['ABC123', 'DEF456', 'GHI789'];

  if (validCertificates.includes(certificateId)) {
    res.send('Certificate is valid!');
  } else {
    res.send('Invalid certificate.');
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
