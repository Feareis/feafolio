import React, { ReactNode } from "react"
import Sidebar from "./Sidebar"

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-screen h-screen bg-[#121314] text-white relative overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex justify-center items-center w-full h-full px-10 py-5">
        <div className="w-full h-full rounded-2xl bg-[#151517] mx-18 border border-gray-700/20 flex flex-col">
          {/* Content */}
          <div className="flex-1 mx-18 my-8">
            {children}
          </div>

          {/* Footer */}
          <footer className="flex justify-center items-center text-center border-t border-gray-700/20 py-4">
            <p className="text-sm text-gray-500 font-bold transition-all duration-300 hover:scale-105">Made with ❤️ by Feareis</p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Layout
