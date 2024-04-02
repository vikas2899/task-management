import { useState } from 'react';
import Task from './components/Task/Task';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  const [showModel, setShowModel] = useState(false);
  return (
    <div className='App'>
      <Navbar />
      <Task showModel={showModel} setShowModel={setShowModel} />
      {showModel && (
        <div className='overlay' onClick={() => setShowModel(false)}></div>
      )}
    </div>
  );
}

export default App;
