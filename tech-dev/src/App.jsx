import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

// webpages
import Home from './pages/home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Blogs from './pages/Blogs.jsx';

// project main layout (container for all pages)
import MainLayout from './components/MainLayout.jsx';

// Javascript code for the main application component
// Javascript function that return's jsx code
export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
        </MainLayout>
      </div>
    </Router>
  );
}