import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const launchDate = new Date('2023-08-01T00:00:00Z'); // Set your website launch date and time here

  const calculateTimeLeft = () => {
    const difference = launchDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div>
    <div className="countdown-container">
      <div className="circle">
        <span className="counter">{timeLeft.days}</span>
        <span className="label">Days</span>
      </div>
      <div className="circle">
        <span className="counter">{timeLeft.hours}</span>
        <span className="label">Hours</span>
      </div>
      <div className="circle">
        <span className="counter">{timeLeft.minutes}</span>
        <span className="label">Minutes</span>
      </div>
      <div className="circle">
        <span className="counter">{timeLeft.seconds}</span>
        <span className="label">Seconds</span>
      </div>
      </div>
      <div className="text-container">
        <p className="line1">Bhokardan City Website</p>
        <p className="line">We are</p>
        <p className="line flashing-text">Coming Soon</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
