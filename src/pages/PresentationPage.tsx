import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import { slides } from "../data/slides";
import { useNavigate } from "react-router-dom";

const PresentationPage = () => {
  const { slideId } = useParams();
  const navigate = useNavigate();

  // Validate slideId
  useEffect(() => {
    const slideNumber = slideId ? parseInt(slideId) : NaN;

    if (isNaN(slideNumber) || slideNumber < 1 || slideNumber > slides.length) {
      navigate("/slides/1");
    }
  }, [slideId, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 slideshow-container">
      <Slideshow />
    </div>
  );
};

export default PresentationPage;
