import React from 'react';
import './App.css';

// Custom Components
import Calendar from './Components/calendar.js'

/* 
<Calendar />:
  <Year />
  <Month />
  <Date />
    <Event /> 
*/

function App() {
  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

export default App;