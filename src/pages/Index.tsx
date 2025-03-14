
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactLogo from '../components/ReactLogo';

const Index = () => {
  const navigate = useNavigate();
  
  const handleStartPresentation = () => {
    navigate('/slides/1');
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 px-6">
      <div className="w-full max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <ReactLogo size={120} />
        </div>
        
        <h1 className="text-5xl font-light mb-6 tracking-tight">
          Introduction to <span className="font-normal text-react-dark">React.js</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          A comprehensive presentation exploring React's core concepts, benefits, 
          and best practices with interactive examples.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleStartPresentation}
            className="px-8 py-4 bg-primary text-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg"
          >
            Start Presentation
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 glass-card rounded-xl">
            <h3 className="text-xl font-medium mb-3">Interactive</h3>
            <p className="text-gray-600">
              Explore React concepts through live demonstrations and code examples.
            </p>
          </div>
          
          <div className="p-6 glass-card rounded-xl">
            <h3 className="text-xl font-medium mb-3">Comprehensive</h3>
            <p className="text-gray-600">
              From Virtual DOM to ecosystem tools, get a complete React overview.
            </p>
          </div>
          
          <div className="p-6 glass-card rounded-xl">
            <h3 className="text-xl font-medium mb-3">Modern</h3>
            <p className="text-gray-600">
              Covers the latest React features and best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
