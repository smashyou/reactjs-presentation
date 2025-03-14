
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const LifecycleDemo: React.FC = () => {
  const [mounted, setMounted] = useState(true);
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prevLogs => [message, ...prevLogs].slice(0, 8));
  };

  const resetDemo = () => {
    setLogs([]);
    setCount(0);
    setMounted(true);
  };

  const toggleMount = () => {
    setMounted(prev => !prev);
  };

  return (
    <div className="border rounded-xl overflow-hidden">
      <div className="bg-gray-50 p-4 border-b flex justify-between items-center">
        <h3 className="font-medium">Component Lifecycle Demo</h3>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={resetDemo}>
            Reset Demo
          </Button>
        </div>
      </div>
      
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex space-x-3">
            <Button onClick={toggleMount} variant={mounted ? "destructive" : "default"}>
              {mounted ? "Unmount Component" : "Mount Component"}
            </Button>
            
            {mounted && (
              <Button onClick={() => setCount(c => c + 1)} variant="outline">
                Update State: {count}
              </Button>
            )}
          </div>
          
          {mounted && <DemoComponent count={count} addLog={addLog} />}
          
          {!mounted && (
            <div className="h-40 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500">Component is unmounted</p>
            </div>
          )}
        </div>
        
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg h-64 overflow-auto font-mono text-sm">
          <div className="mb-2 pb-2 border-b border-gray-700 text-gray-400">Component Lifecycle Logs:</div>
          {logs.length === 0 ? (
            <div className="text-gray-500 italic">No events logged yet...</div>
          ) : (
            logs.map((log, index) => (
              <div key={index} className="py-1">
                <span className="text-green-400">&gt;</span> {log}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// This is the component that demonstrates lifecycle
const DemoComponent: React.FC<{ count: number; addLog: (message: string) => void }> = ({ count, addLog }) => {
  useEffect(() => {
    addLog("🟢 Component MOUNTED");
    
    return () => {
      addLog("🔴 Component UNMOUNTED");
    };
  }, [addLog]);
  
  useEffect(() => {
    if (count > 0) {
      addLog(`🔄 Component UPDATED: count = ${count}`);
    }
  }, [count, addLog]);
  
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border">
      <h4 className="font-medium mb-2">Live Component</h4>
      <div className="text-center py-6">
        <span className="text-2xl font-bold">{count}</span>
        <p className="text-sm text-gray-500 mt-2">Current State Value</p>
      </div>
    </div>
  );
};

export default LifecycleDemo;
