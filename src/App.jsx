import { useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function HashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector(location.hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <div className="app">
      <HashScroll />
      <nav className="navbar">
        <Link to="/" className="logo">Thanh Dat Vu</Link>
        <div className="nav-links" aria-label="Main navigation">
          <Link to="/#about">About</Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/#contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
