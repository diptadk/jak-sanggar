import React from 'react';

const HomePage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#sanggar">Sanggar</a></li>
          <li><a href="#juri">Juri</a></li>
          <li><a href="#kurator">Kurator</a></li>
        </ul>
      </nav>
      <h1>Welcome to JAK Sanggar</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div id="sanggar" style={{ border: '1px solid black', padding: '10px', width: '30%' }}>
          <h2>Sanggar</h2>
          <p>Description of the Sanggar role...</p>
        </div>
        <div id="juri" style={{ border: '1px solid black', padding: '10px', width: '30%' }}>
          <h2>Juri</h2>
          <p>Description of the Juri role...</p>
        </div>
        <div id="kurator" style={{ border: '1px solid black', padding: '10px', width: '30%' }}>
          <h2>Kurator</h2>
          <p>Description of the Kurator role...</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;