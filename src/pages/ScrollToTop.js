import React from 'react';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="scroll-to-top">
      <center><button className="btn-primary" onClick={scrollToTop}>Go to Top</button></center>
    </div>
  );
};

export default ScrollToTop;
