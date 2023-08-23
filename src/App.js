import React from 'react';

function HomePage() {
  const buttonStyle = {
    alignSelf: 'flex-start',
    marginLeft: '2rem',
    padding: '0.5rem 1rem',
    border: '2px solid #333',
    backgroundColor: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    color: 'black', // Add this line to set the text color to black
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100vh' }}>
      <h1 style={{ color: 'yellow', fontSize: '4rem', marginBottom: '1rem' }}>Janta Remote Control</h1>
      <button style={buttonStyle}>Restart</button>
      <button style={buttonStyle}>East</button>
      <button style={buttonStyle}>West</button>
      <button style={buttonStyle}>Stop</button>
      <button style={buttonStyle}>Maintenance</button>
      <button style={buttonStyle}>End Maintenance</button>
      <button style={buttonStyle}>Reset</button>
    </div>
  );
}

export default HomePage;
