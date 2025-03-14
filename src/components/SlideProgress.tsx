
import React, { useEffect, useState } from 'react';

interface SlideProgressProps {
  currentSlide: number;
  totalSlides: number;
}

const SlideProgress: React.FC<SlideProgressProps> = ({ currentSlide, totalSlides }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const percentage = ((currentSlide - 1) / (totalSlides - 1)) * 100;
    
    // Animate the progress
    const animateProgress = () => {
      let start = 0;
      const end = percentage;
      const duration = 400;
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const value = start + (end - start) * progress;
        
        setProgress(value);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    };
    
    animateProgress();
  }, [currentSlide, totalSlides]);
  
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50">
      <div 
        className="h-full bg-primary transition-all ease-out duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default SlideProgress;
