/* eslint-disable react/prop-types */
import { useEffect, useState,useMemo } from 'react';

const Countdown = ({ targetDate }) => {
  const [show, setShow] = useState('');

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};
     console
    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };

      if (timeLeft.Days > 100) {
        setShow('Selected time is more than 100 Days');
      } else if (timeLeft.Days === 0 && timeLeft.Hours === 0 && timeLeft.Minutes === 0 && timeLeft.Seconds === 0) {
        setShow('🥳The countdown is over what next in your adventure?');
      } else {
        setShow('');
      }
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(useMemo(() => calculateTimeLeft(), [targetDate]));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className='countdown'>
      {show ? (
        <h2>{show}</h2>
      ) : (
        <>
          {Object.keys(timeLeft).map((interval) => (
            <div key={interval} className="countdown-card">
              <span>{timeLeft[interval]}</span>
              <br />
              <span>{interval}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Countdown;
