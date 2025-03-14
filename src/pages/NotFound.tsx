
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
      <div className="text-center max-w-md p-8 glass-card rounded-2xl">
        <h1 className="text-6xl font-light mb-6 text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-primary text-white rounded-xl transition-colors hover:bg-primary/90"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
