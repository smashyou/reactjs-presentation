import React from "react";

interface ToolLogoProps {
  name: "redux" | "mobx" | "router" | "nextjs" | "axios" | "fetch";
  className?: string;
}

const ToolLogo: React.FC<ToolLogoProps> = ({ name, className = "" }) => {
  // Map of logo file paths
  const logos: Record<string, string> = {
    redux: "/logos/redux.png",
    mobx: "/logos/mobx.png",
    router: "/logos/router.png",
    nextjs: "/logos/nextjs.png",
    axios: "/logos/axios.png",
    fetch: "/logos/fetch.png",
  };

  // Get the logo path based on the `name` prop
  const logoPath = logos[name];

  if (!logoPath) {
    return null; // Return null if no logo is found for the given name
  }

  return (
    <img
      src={logoPath}
      alt={`${name} logo`}
      className={`w-full h-full ${className}`}
    />
  );
};

export default ToolLogo;
