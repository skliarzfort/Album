import React from 'react';
import { PhotosScreen } from './screens/photos/PhotosScreen';

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
          <PhotosScreen />
        </div>
      </div>
    </div>
  );
}

export default App;
