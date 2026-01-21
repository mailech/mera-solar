import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProductsManager from './pages/ProductsManager';
import CategoriesManager from './pages/CategoriesManager';
import ServicesManager from './pages/ServicesManager';
import ProjectsManager from './pages/ProjectsManager';
import Inquiries from './pages/Inquiries';

import { ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductsManager />} />
          <Route path="/categories" element={<CategoriesManager />} />
          <Route path="/services" element={<ServicesManager />} />
          <Route path="/projects" element={<ProjectsManager />} />
          <Route path="/inquiries" element={<Inquiries />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
