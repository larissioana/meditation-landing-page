import { useEffect, useState } from 'react'
import './App.css'
import Navigation from './components/navigation/Navigation'
import Header from './components/header/Header';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark-theme" : false;
  });

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode)
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", isDarkMode ? "dark-theme" : "light-theme")
  }, [isDarkMode]);

  return (
    <>
      <Navigation toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Header />
    </>
  )
}

export default App
