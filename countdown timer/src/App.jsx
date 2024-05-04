import { useState } from 'react';
import Countdown from './components/Countdown';
import './App.css';

function App() {
  const [targetDate, setTargetDate] = useState('');
  const [countdownActive, setCountdownActive] = useState(false);

  const handleCountdown = () => {
    if (targetDate) {
      setCountdownActive(!countdownActive);
    }
  };

  return (
    <div className="App">
      <h1>Countdown <span>Timer</span></h1>
      <input
        type="datetime-local"
        value={targetDate}
        onChange={(e) => setTargetDate(e.target.value)}
      />
      <br/>
      <button onClick={handleCountdown}>
        {!countdownActive ? 'Start Timer' : 'Cancel Timer'}
      </button>
      {countdownActive && <Countdown targetDate={targetDate} />}
    </div>
  );
}

export default App;
