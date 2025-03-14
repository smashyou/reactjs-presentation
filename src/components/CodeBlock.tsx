import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"; // VS Code-like theme
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-tsx";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

// Ensure JSX syntax works properly
Prism.languages.jsx = Prism.languages.javascript;

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  highlightLines?: string; // Example: "1-3,5,7-8"
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "javascript",
  className = "",
  highlightLines = "",
}) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (codeRef.current) {
        Prism.highlightElement(codeRef.current);
      }
    }, 50); // Delay ensures proper highlighting
  }, [code, language]);

  return (
    <pre
      className={`line-numbers ${
        highlightLines ? "line-highlight" : ""
      } ${className}`}
      data-line={highlightLines}
      style={{
        backgroundColor: "#1e1e1e", // VS Code dark theme background
        borderRadius: "6px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        fontFamily:
          '"Fira Code", Menlo, Monaco, Consolas, "Courier New", monospace',
      }}
    >
      <code
        ref={codeRef}
        className={`language-${language}`}
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(code, Prism.languages[language], language),
        }}
      />
    </pre>
  );
};

export default CodeBlock;
