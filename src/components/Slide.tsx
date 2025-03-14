import React from "react";
import ReactLogo from "./ReactLogo";
import { slides } from "../data/slides";
import { Button } from "./ui/button";
import VirtualDOMDemo from "./VirtualDOMDemo";
import SPADemo from "./SPADemo";
import LifecycleDemo from "./LifecycleDemo";
import CodeBlock from "./CodeBlock";
import ToolLogo from "./ToolLogo";

interface SlideProps {
  slide: (typeof slides)[0];
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ slide, isActive }) => {
  // Determine if we need to show an interactive demo for this slide
  const renderInteractiveDemo = () => {
    switch (slide.key) {
      case "virtual-dom":
        return <VirtualDOMDemo />;
      case "lifecycle":
        return <LifecycleDemo />;
      case "use-cases":
        return <SPADemo />;
      default:
        return null;
    }
  };

  return (
    <div className={`slide ${isActive ? "active" : ""}`}>
      <div className="max-w-6xl mx-auto w-full pb-20">
        <div className="flex justify-between items-center mb-12 mt-10">
          <div className="flex items-center">
            <ReactLogo size={36} className="mr-4" />
            <h2 className="text-4xl font-light">{slide.title}</h2>
          </div>
          <div className="text-2xl font-light text-gray-400">{slide.id}/10</div>
        </div>

        <div className="mt-8">{slide.content}</div>

        {renderInteractiveDemo() && (
          <div className="mt-10 pt-8 border-t border-gray-200 mb-20">
            <h3 className="text-2xl font-light mb-6">Interactive Example</h3>
            {renderInteractiveDemo()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Slide;
