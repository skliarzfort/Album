import React from 'react';
import { Album } from './components/Album';

function App() {
  return (
    <div className="main-wrapper">
      <header className="main-header">
        <div className="container-fluid">
          <h1 className='text-center'>Album</h1>
        </div>
      </header>
      <div className='main-content'>
        <div className="container-fluid">
          <Album />
        </div>
      </div>
    </div>
  );
}

export default App;
