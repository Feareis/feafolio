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
          <div className="flex-grow flex flex-col items-center pt-10 gap-4 overflow-hidden">
            {/* Optional page title */}
            {title && <PageTitle title={title} />}

            {/* Injected Page content */}
            <div className="w-[80%]">{children}</div>
          </div>

          {/* Footer */}
          <footer className="flex justify-center items-center text-center border-t border-gray-700/20 py-4">
            <p className="text-sm text-gray-500 font-bold transition-all duration-300 hover:scale-105">
              Made with ❤️ by Feareis
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
