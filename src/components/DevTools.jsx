import React, { useEffect, useState } from 'react';

/**
 * DevTools component for responsive development
 * Only renders in development mode
 */
const DevTools = () => {
  // Only show in development
  if (process.env.NODE_ENV !== 'development') return null;
  
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  
  const [breakpoint, setBreakpoint] = useState('');
  
  useEffect(() => {
    // Function to determine current breakpoint
    const getBreakpoint = (width) => {
      if (width < 480) return 'xs';
      if (width < 576) return 'sm-';
      if (width < 768) return 'sm';
      if (width < 992) return 'md';
      if (width < 1200) return 'lg';
      if (width < 1600) return 'xl';
      return 'xxl';
    };
    
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setWindowSize({ width, height });
      setBreakpoint(getBreakpoint(width));
      
      // Add a class to the body for conditional styling
      document.body.classList.add('development');
    };
    
    // Set up listener for window resize
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', updateDimensions);
      document.body.classList.remove('development');
    };
  }, []);
  
  return (
    <div className="viewport-indicator">
      <div>Width: {windowSize.width}px / BP: {breakpoint}</div>
    </div>
  );
};

export default DevTools;