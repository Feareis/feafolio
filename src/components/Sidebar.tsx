import React from "react";
import { NavLink } from "react-router-dom";
import { Home, User, TrendingUpDown, SquareTerminal, Rss, Mail } from "lucide-react";

// Navigation links with icon, label and route
const links = [
  { icon: Home, label: "Home", href: "/" },
  { icon: User, label: "À Propos", href: "/about" },
  { icon: TrendingUpDown, label: "Experience", href: "/experience" },
  { icon: SquareTerminal, label: "Projets", href: "/work" },
  { icon: Rss, label: "Blog", href: "/blog" },
  { icon: Mail, label: "Contact", href: "/contact" },
];

// Single sidebar item component with tooltip on hover
const SidebarItem = ({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ElementType;
  label: string;
  href: string;
}) => (
  <NavLink
    to={href}
    title={label}
    className={({ isActive }) =>
      `relative group flex items-center p-4 border border-gray-700/20 rounded-xl shadow-xl transition-all duration-300 hover:scale-110 ${
        isActive
          ? "bg-[#1a1b1e] text-lime-500"
          : "bg-[#1a1b1e] text-gray-400 hover:text-gray-200"
      }`
    }
  >
    <Icon size={20} />
    {/* Tooltip visible on hover (large screens) */}
    <p className="hidden h-full items-center lg:flex absolute border border-gray-700/20 top-1/2 -translate-y-1/2 left-full ml-3 opacity-0 group-hover:opacity-100 z-50 px-4 py-2 rounded-lg shadow-lg bg-[#1a1b1e] text-gray-300 font-semibold whitespace-nowrap transition-all duration-400">
      {label}
    </p>
  </NavLink>
);

// Sidebar container with navigation
const Sidebar = () => {
  return (
    <div className="fixed top-14 bottom-14 left-0 z-50 flex flex-col items-center justify-center">
      <div className="flex flex-col p-4 gap-5 rounded-lg">
        {links.map((link) => (
          <SidebarItem key={link.label} {...link} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
