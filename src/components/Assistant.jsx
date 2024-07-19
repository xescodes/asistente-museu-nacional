// src/components/Assistant.js
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Assistant = () => {
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem('navigation-history');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem('navigation-history', JSON.stringify(history));
  }, [history]);

  const handlePageVisit = (page) => {
    const newHistory = [...history, { page, timestamp: new Date() }];
    setHistory(newHistory);
  };

  const sendEmail = () => {
    const templateParams = {
      to_name: 'User',
      message: JSON.stringify(history, null, 2),
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div>
      <h2>Assistant</h2>
      <button onClick={() => handlePageVisit('home')}>Home</button>
      <button onClick={() => handlePageVisit('exhibitions')}>Exhibitions</button>
      <button onClick={() => handlePageVisit('visit')}>Visit</button>
      <button onClick={() => handlePageVisit('blog')}>Blog</button>
      <button onClick={sendEmail}>Send History by Email</button>
      <h3>History</h3>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>{entry.page} - {entry.timestamp.toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default Assistant;