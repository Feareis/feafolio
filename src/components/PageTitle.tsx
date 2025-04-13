import React from "react";

interface PageTitleProps {
  title: string; // Title to display in the page
}

// PageTitle component: centered title with consistent styling
const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="relative w-full flex justify-center items-center my-8">
      {/* Main section title */}
      <h1 className="text-4xl font-bold text-gray-300/80 z-10 text-center">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
