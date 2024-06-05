import React, { useState, useEffect } from 'react';
import "../../css/ScrollToTop.css"

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300){
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300){
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div className="scroll-to-top" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}>
      &#8679;
    </div>
  );
}

export default ScrollToTop;
