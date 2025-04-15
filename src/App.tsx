import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// List of routes, components, title
const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/experience", element: <Experience />, title: "Expérience" },
  { path: "/work", element: <Work />, title: "Projets" },
  { path: "/blog", element: <Blog />, title: "Blog" },
  { path: "/contact", element: <Contact />, title: "Contact" },
];

// Root component containing the main router configuration
const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element, title }) => (
          <Route
            key={path}
            path={path}
            element={<Layout title={title}>{element}</Layout>}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
