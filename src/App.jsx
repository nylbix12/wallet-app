import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddFragment from './pages/AddFragment';
import Tags from './pages/Tags';
import About from './pages/About';
import Header from './components/Header';

import { ThemeSwitcher } from './components/ThemeSwitcher'; // ton composant ThemeSwitcher tout-en-un
import { ThemeToggleButton, useTheme } from './components/ThemeSwitcher'; // bouton et hook

function ThemeToggle() {
  const { toggleTheme, theme } = useTheme();

  return (
    <div style={{ textAlign: 'right', padding: '1rem' }}>
      <ThemeToggleButton onClick={toggleTheme}>
        {theme === "light" ? "🌙 Mode sombre" : "☀️ Mode clair"}
      </ThemeToggleButton>
    </div>
  );
}

export default function App() {
  return (
    <ThemeSwitcher>
      <Header />
      <ThemeToggle />
      <main style={{ padding: "2rem", minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddFragment />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </ThemeSwitcher>
  );
}
