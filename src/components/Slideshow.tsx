
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Slide from './Slide';
import SlideNavigation from './SlideNavigation';
import SlideProgress from './SlideProgress';
import { slides } from '../data/slides';

const Slideshow: React.FC = () => {
  const navigate = useNavigate();
  const { slideId } = useParams();
  
  // Convert slideId to number, default to 1 if invalid
  const currentSlideId = slideId ? parseInt(slideId) : 1;
  const validSlideId = isNaN(currentSlideId) || currentSlideId < 1 || currentSlideId > slides.length 
    ? 1 
    : currentSlideId;
  
  const [currentSlide, setCurrentSlide] = useState(validSlideId);
  
  // Update URL when slide changes
  useEffect(() => {
    if (currentSlide !== validSlideId) {
      setCurrentSlide(validSlideId);
    }
  }, [validSlideId]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && currentSlide > 1) {
        goToSlide(currentSlide - 1);
      } else if (event.key === 'ArrowRight' && currentSlide < slides.length) {
        goToSlide(currentSlide + 1);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);
  
  const goToSlide = (slideNumber: number) => {
    if (slideNumber >= 1 && slideNumber <= slides.length) {
      navigate(`/slides/${slideNumber}`);
      setCurrentSlide(slideNumber);
    }
  };
  
  return (
    <div className="slide-container">
      <SlideProgress currentSlide={currentSlide} totalSlides={slides.length} />
      
      {slides.map((slide) => (
        <Slide 
          key={slide.id} 
          slide={slide} 
          isActive={currentSlide === slide.id}
        />
      ))}
      
      <SlideNavigation 
        currentSlide={currentSlide} 
        totalSlides={slides.length} 
        goToSlide={goToSlide} 
      />
    </div>
  );
};

export default Slideshow;
