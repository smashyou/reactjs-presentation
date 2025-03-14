
import React, { useState, useEffect } from 'react';
import { X, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';

interface Route {
  path: string;
  name: string;
  component: React.ReactNode;
}

const SPADemo: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('/home');
  const [isLoading, setIsLoading] = useState(false);
  const [lastTransition, setLastTransition] = useState<number | null>(null);
  const [pageReloads, setPageReloads] = useState(0);
  
  const handleNavigate = (path: string) => {
    if (path === currentPath) return;

    setIsLoading(true);
    
    // Simulate network delay for a more realistic demo
    setTimeout(() => {
      setCurrentPath(path);
      setIsLoading(false);
      
      // Record transition time
      const now = performance.now();
      setLastTransition(now);
    }, 300);
  };

  // Simulate a page reload
  const handleSimulatePageReload = () => {
    setIsLoading(true);
    setPageReloads(prev => prev + 1);
    
    // Simulate a full page reload
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  // Reset the page reload counter
  const handleResetReloads = () => {
    setPageReloads(0);
  };
  
  // Routes configuration
  const routes: Route[] = [
    {
      path: '/home',
      name: 'Home',
      component: (
        <div className="p-6 animate-fade-in">
          <h2 className="text-xl font-medium mb-4">Welcome to React SPA</h2>
          <p className="text-gray-600 mb-4">
            This is a demonstration of a Single-Page Application. Notice how the page 
            doesn't reload when you navigate between routes.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <Button 
              onClick={() => handleNavigate('/about')}
              size="sm"
            >
              About Us
            </Button>
            <Button 
              onClick={() => handleNavigate('/contact')}
              variant="secondary"
              size="sm"
            >
              Contact
            </Button>
            <Button 
              onClick={handleSimulatePageReload}
              variant="outline"
              size="sm"
              className="ml-auto"
            >
              Simulate Traditional Page Reload
            </Button>
          </div>
        </div>
      )
    },
    {
      path: '/about',
      name: 'About',
      component: (
        <div className="p-6 animate-fade-in">
          <h2 className="text-xl font-medium mb-4">About Us</h2>
          <p className="text-gray-600 mb-4">
            In a traditional website, this page would require a full reload. 
            In React, only this content area changes.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <Button 
              onClick={() => handleNavigate('/home')}
              size="sm"
            >
              Back to Home
            </Button>
            <Button 
              onClick={() => handleNavigate('/contact')}
              variant="secondary"
              size="sm"
            >
              Contact
            </Button>
            <Button 
              onClick={handleSimulatePageReload}
              variant="outline"
              size="sm"
              className="ml-auto"
            >
              Simulate Traditional Page Reload
            </Button>
          </div>
        </div>
      )
    },
    {
      path: '/contact',
      name: 'Contact',
      component: (
        <div className="p-6 animate-fade-in">
          <h2 className="text-xl font-medium mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded-md" 
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                className="w-full p-2 border rounded-md" 
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea 
                className="w-full p-2 border rounded-md" 
                rows={3}
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button 
                type="button"
                onClick={() => handleNavigate('/home')}
                variant="outline"
                size="sm"
              >
                Cancel
              </Button>
              <Button 
                type="button"
                size="sm"
              >
                Send Message
              </Button>
              <Button 
                onClick={handleSimulatePageReload}
                variant="outline"
                size="sm"
                className="ml-auto"
              >
                Simulate Traditional Page Reload
              </Button>
            </div>
          </form>
        </div>
      )
    }
  ];
  
  // Find the current route
  const currentRoute = routes.find(route => route.path === currentPath) || routes[0];
  
  return (
    <div className="border rounded-xl overflow-hidden mb-12">
      <div className="flex items-center p-3 bg-gray-800 text-white">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-sm font-mono">
          example.com{currentPath}
          {pageReloads > 0 && <span className="text-gray-400"> (Reloaded {pageReloads} times)</span>}
        </div>
        <div className="w-10 flex justify-end">
          {pageReloads > 0 && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6 text-gray-400 hover:text-white"
              onClick={handleResetReloads}
              title="Reset reload counter"
            >
              <RefreshCw size={14} />
            </Button>
          )}
        </div>
      </div>
      
      <div className="border-b">
        <div className="flex">
          {routes.map((route) => (
            <div 
              key={route.path}
              className={`px-4 py-2 border-r flex items-center space-x-2 cursor-pointer hover:bg-gray-50 transition-colors ${
                route.path === currentPath ? 'bg-white' : 'bg-gray-50'
              }`}
              onClick={() => handleNavigate(route.path)}
            >
              <span className="text-sm">{route.name}</span>
              {route.path === currentPath && (
                <X size={14} className="text-gray-400 hover:text-gray-600" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative min-h-[300px]">
        {isLoading ? (
          <div className="absolute inset-0 flex justify-center items-center bg-white">
            <div className="flex flex-col items-center">
              <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mb-4"></div>
              <p className="text-gray-500">
                {pageReloads > 0 ? "Loading entire page..." : "Loading content..."}
              </p>
            </div>
          </div>
        ) : (
          currentRoute.component
        )}
        
        {lastTransition && !isLoading && (
          <div className="absolute bottom-2 right-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-md">
            {pageReloads > 0 ? 
              "Full page reload simulated" : 
              "Only content updated - no page reload required!"}
          </div>
        )}
      </div>
    </div>
  );
};

export default SPADemo;
