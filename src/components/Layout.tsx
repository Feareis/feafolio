import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: ReactNode;
};

// Layout component wrapping all pages with a sidebar and consistent styling
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-screen h-screen bg-[#121314] cursor text-white relative overflow-hidden">
      {/* Sidebar component is always visible on the left */}
      <Sidebar />

      {/* Main content area centered both vertically and horizontally */}
      <div className="flex justify-center items-center w-full h-full px-10 py-5">
        <div className="w-full h-full rounded-2xl bg-[#151517] mx-18 border border-gray-700/20 flex flex-col">
          {/* Page content */}
          <div className="flex-1 mx-18 my-8">
            {children}
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
