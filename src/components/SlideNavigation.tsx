
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  goToSlide: (slide: number) => void;
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({ 
  currentSlide, 
  totalSlides, 
  goToSlide 
}) => {
  const handlePrev = () => {
    if (currentSlide > 1) {
      goToSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < totalSlides) {
      goToSlide(currentSlide + 1);
    }
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center items-center">
      <div className="glass-card backdrop-blur-md bg-white/70 rounded-full px-4 py-2 flex items-center shadow-lg">
        <button
          onClick={handlePrev}
          disabled={currentSlide === 1}
          className={`p-2 rounded-full transition-all duration-300 
            ${currentSlide === 1 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'hover:bg-gray-200 text-gray-700'}`}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="mx-4 flex gap-1.5">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index + 1)}
              className={`h-2 rounded-full transition-all duration-300
                ${currentSlide === index + 1 
                  ? 'w-8 bg-primary' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={handleNext}
          disabled={currentSlide === totalSlides}
          className={`p-2 rounded-full transition-all duration-300 
            ${currentSlide === totalSlides 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'hover:bg-gray-200 text-gray-700'}`}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SlideNavigation;
