import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// List of routes, components, title
const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/education", element: <Education />, title: "Formation" },
  { path: "/project", element: <Project />, title: "Projets" },
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
