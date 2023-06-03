import React, { useState, useEffect } from 'react';

const VisitorCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulating a visitor count increment every second
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="visitor-counter">
      <h2>Visitor Count</h2>
      <p className="count">{count}</p>
    </div>
  );
};

export default VisitorCount;
