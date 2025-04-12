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
        <div className="w-full h-full rounded-2xl bg-[#1a1b1e] p-8 mx-18 my-4 border border-gray-700/20 flex flex-col">
          {/* Content */}
          <div className="flex-1">
            {children}
          </div>

          {/* Footer */}
          <footer className="flex justify-center items-center text-sm text-gray-500 text-center border-t border-gray-700/20 pt-4 mt-8">
            © {new Date().getFullYear()} - Made with ❤️ by Feareis
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Layout
