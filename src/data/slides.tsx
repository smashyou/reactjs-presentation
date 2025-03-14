import React from "react";
import CodeBlock from "../components/CodeBlock"; // Import CodeBlock component
import ToolLogo from "../components/ToolLogo";

export interface SlideData {
  id: number;
  title: string;
  content: React.ReactNode;
  key: string;
}

export const slides: SlideData[] = [
  {
    id: 1,
    title: "Introduction to React.js",
    key: "intro",
    content: (
      <div className="space-y-6">
        <p className="text-xl leading-relaxed">
          React.js is a JavaScript library created by Facebook to build user
          interfaces mainly for single-page applications (SPAs).
        </p>
        <div className="flex flex-col md:flex-row gap-6 items-center my-8">
          <div className="glass-card p-6 rounded-xl w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">2011</h3>
            <p>Developed for Facebook's News Feed</p>
          </div>
          <div className="glass-card p-6 rounded-xl w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">2012</h3>
            <p>Implemented in Instagram</p>
          </div>
          <div className="glass-card p-6 rounded-xl w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">2013</h3>
            <p>Open-sourced to the public</p>
          </div>
        </div>
        <p className="text-lg">
          React focuses on the View layer of MVC architecture and excels at
          building user interfaces that update efficiently.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "What is React.js?",
    key: "what-is",
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">
              Component-Based Approach
            </h3>
            <p className="leading-relaxed">
              React is built around components - reusable, self-contained pieces
              of UI that can be composed to build complex interfaces.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">Declarative Nature</h3>
            <p className="leading-relaxed">
              React lets you declaratively describe your UI and automatically
              handles updates when data changes.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-4">JSX Syntax</h3>
          <p className="leading-relaxed mb-4">
            JSX is a syntax extension that lets you write HTML-like CodeBlock in
            JavaScript:
          </p>
          <CodeBlock
            code={`// A simple React component using JSX
function MyComponent() {
  return (
    <div className="greeting">
      <h1>Hello, React!</h1>
      <p>This is a simple component</p>
    </div>
  );
}`}
            language="jsx"
          />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "How Does React.js Work? (Virtual DOM)",
    key: "virtual-dom",
    content: (
      <div className="space-y-6">
        <p className="text-xl leading-relaxed">
          React creates a lightweight copy of the real DOM in memory - the
          Virtual DOM.
        </p>
        <div>
          <h3 className="text-xl font-medium mb-4">
            When the state changes, React follows this process:
          </h3>
          <ol className="list-decimal pl-5 space-y-3">
            <li>Creates a virtual representation of UI</li>
            <li>
              When the data changes, Generates a new virtual representation
            </li>
            <li>
              Compares ("Diff") the old and new virtual DOMs to identify changes
            </li>
            <li>
              Updates only the changed parts in the real DOM for better
              performance
            </li>
          </ol>
        </div>
        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div className="glass-card p-6 rounded-xl space-y-4">
            <h3 className="text-lg font-semibold">React's Virtual DOM</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Creates virtual representation</li>
              <li>Calculates minimal changes needed</li>
              <li>Batches DOM operations</li>
              <li>Only updates what changed</li>
            </ul>
          </div>
          <div className="glass-card p-6 rounded-xl space-y-4">
            <h3 className="text-lg font-semibold">Traditional DOM Updates</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Directly manipulates the DOM</li>
              <li>Updates entire nodes/sections</li>
              <li>Causes layout recalculations</li>
              <li>Can be slow for complex UIs</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "How Does React.js Work? (Component Lifecycle)",
    key: "lifecycle",
    content: (
      <div className="space-y-6">
        <p className="text-xl leading-relaxed">
          React components go through a lifecycle of mounting, updating, and
          unmounting.
        </p>

        <div className="grid md:grid-cols-3 gap-8 my-8">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-green-600 mb-2">
              Mounting
            </h3>
            <p>Component is being created and inserted into the DOM.</p>
            <p className="text-sm mt-4">
              Key hooks: useEffect(() {"=>"} {"{}"}, [])
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              Updating
            </h3>
            <p>Component is re-rendering due to changes in props or state.</p>
            <p className="text-sm mt-4">
              Key hooks: useEffect(() {"=>"} {"{}"}, [dependency])
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-red-600 mb-2">
              Unmounting
            </h3>
            <p>Component is being removed from the DOM.</p>
            <p className="text-sm mt-4">
              Key hooks: useEffect(() {"=>"} {"{ return () => {} }"}, [])
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">Example: Lifecycle Demo</h3>
          <CodeBlock
            code={`// Component demonstrating lifecycle events
import React, { useState, useEffect } from 'react';

function LifecycleDemo() {
  const [count, setCount] = useState(0);
  
  // Mounting phase (runs once)
  useEffect(() => {
    console.log("Component mounted");
    
    // Unmounting phase (cleanup)
    return () => {
      console.log("Component will unmount");
    };
  }, []);
  
  // Updating phase (runs on count change)
  useEffect(() => {
    console.log("Count updated to:", count);
  }, [count]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
            language="jsx"
          />
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "When Is React.js Used?",
    key: "use-cases",
    content: (
      <div className="space-y-6">
        <p className="text-xl leading-relaxed">
          React is ideal for a variety of modern web applications:
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-3">
              Single-Page Applications (SPAs)
            </h3>
            <p>
              Complete web applications that load a single HTML page and
              dynamically update as users interact with them.
            </p>
            <p className="text-sm text-gray-600 mt-3">
              Examples: Facebook, Gmail, Airbnb
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-3">Real-time Dashboards</h3>
            <p>
              Data visualizations and analytics dashboards that update in
              real-time.
            </p>
            <p className="text-sm text-gray-600 mt-3">
              Examples: Grafana, Financial platforms
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-3">
              Complex Web Applications
            </h3>
            <p>
              Feature-rich applications with complex UI requirements and state
              management needs.
            </p>
            <p className="text-sm text-gray-600 mt-3">
              Examples: Design tools, Business applications
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-3">
              Interactive UI Components
            </h3>
            <p>Highly interactive elements embedded within larger websites.</p>
            <p className="text-sm text-gray-600 mt-3">
              Examples: Interactive forms, Comment systems
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">SPA Navigation Example</h3>
          <CodeBlock
            code={`// Simple React Router implementation
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      
      {/* Routes are rendered without page refreshes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}`}
            language="jsx"
          />
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Benefits of React.js",
    key: "benefits",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-3">Performance</h3>
            <p>
              Virtual DOM minimizes expensive DOM operations and optimizes
              rendering.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-3">Reusability</h3>
            <p>
              Components can be reused across different parts of applications or
              different projects.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-3">Flexibility</h3>
            <p>
              Works with existing applications and integrates with various
              libraries.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-3">Developer Experience</h3>
            <p>
              Component-based architecture makes CodeBlockBlock more
              predictable, testable, and easier to debug.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-3">Large Ecosystem</h3>
            <p>
              Rich ecosystem of libraries, tools, extensions, and community
              support.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">
            Component Reusability Example
          </h3>
          <CodeBlock
            code={`// Reusable Button component
function Button({ variant = "primary", size = "medium", children, onClick }) {
  // Styles based on props
  const variantClasses = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-200 text-gray-800",
    danger: "bg-red-600 text-white"
  };
  
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg"
  };
  
  const className = \`rounded focus:outline-none 
    \${variantClasses[variant]} \${sizeClasses[size]}\`;
  
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

// Usage in multiple places
<Button onClick={handleSave}>Save</Button>
<Button variant="secondary" size="small">Cancel</Button>
<Button variant="danger" size="large">Delete</Button>`}
            language="jsx"
          />
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Vulnerabilities in React.js",
    key: "vulnerabilities",
    content: (
      <div className="space-y-6">
        <p className="text-xl leading-relaxed">
          While React helps avoid many common issues, there are still security
          concerns to be aware of:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="glass-card p-6 rounded-xl border-l-4 border-red-500">
            <h3 className="text-lg font-semibold mb-3">
              Cross-Site Scripting (XSS)
            </h3>
            <p>
              React automatically escapes content, but dangerouslySetInnerHTML
              bypasses this protection.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl border-l-4 border-red-500">
            <h3 className="text-lg font-semibold mb-3">
              Malicious Dependencies
            </h3>
            <p>
              Third-party packages may contain vulnerable or malicious
              CodeBlockBlock that can compromise your application.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="glass-card p-6 rounded-xl border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold mb-3">Over-rendering</h3>
            <p>
              Inefficient component implementation can cause performance issues
              and excessive re-renders.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold mb-3">
              Insecure Data Handling
            </h3>
            <p>
              Client-side storage misuse can expose sensitive information to
              attackers.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4 text-red-600">
            Dangerous CodeBlock Example
          </h3>
          <CodeBlock
            code={`// ⚠️ VULNERABLE CodeBlock - DON'T USE THIS ⚠️
function CommentDisplay({ userComment }) {
  return (
    <div 
      dangerouslySetInnerHTML={{ 
        __html: userComment // Vulnerability: Directly inserting user input
      }} 
    />
  );
}

// If userComment contains: 
// <img src="x" onerror="alert('Your data has been stolen')" />
// This would execute the malicious JavaScript`}
            language="jsx"
          />
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Mitigating Vulnerabilities",
    key: "security",
    content: (
      <div className="space-y-6">
        <p className="text-xl leading-relaxed">
          Best practices to keep your React applications secure:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
          <div className="glass-card p-6 rounded-xl border-l-4 border-green-500">
            <h3 className="text-lg font-semibold mb-3">Sanitize Inputs</h3>
            <p>
              Always validate and sanitize user input before rendering or
              processing it.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl border-l-4 border-green-500">
            <h3 className="text-lg font-semibold mb-3">Regular Audits</h3>
            <p>
              Run 'npm audit' regularly to check for vulnerabilities in
              dependencies.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl border-l-4 border-green-500">
            <h3 className="text-lg font-semibold mb-3">HTTPS Only</h3>
            <p>
              Always serve React applications over HTTPS to prevent data
              interception.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl border-l-4 border-green-500">
            <h3 className="text-lg font-semibold mb-3">Secure Storage</h3>
            <p>
              Don't store sensitive information in localStorage or
              sessionStorage.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4 text-green-600">
            Secure CodeBlock Example
          </h3>
          <CodeBlock
            code={`// Safe user content display
import DOMPurify from 'dompurify';

function SafeCommentDisplay({ userComment }) {
  // Option 1: Simple text display (safest)
  return <div>{userComment}</div>;
  
  // Option 2: If HTML is needed, sanitize first
  const sanitizedComment = DOMPurify.sanitize(userComment, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href']
  });
  
  return (
    <div 
      dangerouslySetInnerHTML={{ 
        __html: sanitizedComment // Sanitized before insertion
      }} 
    />
  );
}

// Secure API request
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`, {
      credentials: 'same-origin', // Include cookies for same-origin requests
      headers: {
        'Content-Type': 'application/json',
        // Include CSRF token if your backend requires it
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
      }
    });
    
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching user data:', error);
    // Handle error appropriately
  }
}`}
            language="jsx"
          />
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: "Complementary Tools & Libraries",
    key: "ecosystem",
    content: (
      <div className="space-y-6">
        <p className="text-xl leading-relaxed mb-8">
          React's ecosystem includes powerful tools that extend its
          capabilities:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="glass-card p-6 rounded-xl flex items-center">
            <div className="flex-shrink-0 w-16 h-16 mr-4 rounded-lg bg-purple-100 flex items-center justify-center p-2">
              <ToolLogo name="redux" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Redux</h3>
              <p>
                Predictable state container for JavaScript apps, ideal for
                complex state management
              </p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl flex items-center">
            <div className="flex-shrink-0 w-16 h-16 mr-4 rounded-lg bg-orange-100 flex items-center justify-center p-2">
              <ToolLogo name="mobx" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">MobX</h3>
              <p>
                Simple, scalable state management through reactive programming
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="glass-card p-6 rounded-xl flex items-center">
            <div className="flex-shrink-0 w-16 h-16 mr-4 rounded-lg bg-gray-100 flex items-center justify-center p-2">
              <ToolLogo name="router" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">React Router</h3>
              <p>
                Declarative routing for React applications, enabling navigation
                without page reloads
              </p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl flex items-center">
            <div className="flex-shrink-0 w-16 h-16 mr-4 rounded-lg bg-gray-100 flex items-center justify-center p-2">
              <ToolLogo name="nextjs" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Next.js</h3>
              <p>
                Framework for server-rendered React applications with zero
                configuration
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-6 rounded-xl flex items-center">
            <div className="flex-shrink-0 w-16 mr-4 rounded-lg bg-indigo-100 flex items-center justify-center p-2">
              <ToolLogo name="axios" className="w-full h-auto object-contain" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Axios</h3>
              <p>
                Promise-based HTTP client for making API requests with helpful
                features
              </p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl flex items-center">
            <div className="flex-shrink-0 w-16 h-16 mr-4 rounded-lg bg-indigo-100 flex items-center justify-center p-2">
              <ToolLogo name="fetch" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Fetch API</h3>
              <p>
                Modern browser API for making HTTP requests with native
                JavaScript
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: "Conclusion & Key Takeaways",
    key: "conclusion",
    content: (
      <div className="space-y-8">
        <div className="glass-card p-8 rounded-xl space-y-6">
          <h3 className="text-xl font-semibold">React's Main Strengths</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span>
                <strong>Virtual DOM</strong> for efficient UI updates
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span>
                <strong>Component-based architecture</strong> promoting
                reusability and maintainability
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span>
                <strong>Rich ecosystem</strong> of libraries, tools, and
                community support
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span>
                <strong>Declarative approach</strong> making CodeBlock more
                predictable and easier to debug
              </span>
            </li>
          </ul>
        </div>

        <div className="glass-card p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">React Native</h3>
          <p className="leading-relaxed">
            React principles extend to mobile development with React Native,
            allowing you to build native mobile applications for iOS and Android
            using the same component concepts.
          </p>
        </div>

        <div className="glass-card p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Performance</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use React.memo for expensive components</li>
                <li>Implement proper key props in lists</li>
                <li>Avoid unnecessary re-renders</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Security</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Sanitize user inputs</li>
                <li>Avoid dangerouslySetInnerHTML when possible</li>
                <li>Keep dependencies updated</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50">
          <h3 className="text-xl font-semibold mb-4">Learning Path</h3>
          <p className="leading-relaxed">
            Mastering React is a journey. Start with the fundamentals
            (components, props, state), then move to more advanced topics
            (context, hooks, performance optimization). Build projects and
            engage with the community to continue growing as a React developer.
          </p>
        </div>
      </div>
    ),
  },
];
