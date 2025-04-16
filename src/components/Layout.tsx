import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import PageTitle from "./PageTitle";

type LayoutProps = {
  children: ReactNode;
  title?: string; // Optional title to display in the page
};

// Global layout with sidebar, optional title and main content area
const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="w-screen h-screen bg-[#121314] cursor text-white relative overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Page content */}
      <div className="flex justify-center items-center w-full h-full px-10 py-5">
        <div className="w-full h-full rounded-2xl bg-[#151517] mx-18 border border-gray-700/20 flex flex-col">

          {/* Main content container */}
          <div className="flex-grow flex flex-col items-center gap-4 py-1 overflow-hidden">
            {/* Children + TitlePage */}
            <div className="w-[80%] flex-1 overflow-y-auto pr-2 hide-scrollbar space-y-8">
              {title && <PageTitle title={title} />}
              {children}
            </div>
          </div>

          {/* Footer */}
          <footer className="flex justify-center items-center text-center border-t border-gray-700/20 py-4">
            <p className="text-sm text-gray-500 font-bold transition-all duration-300 hover:scale-102">
              Made with ❤️ by Valentin Reisse
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
