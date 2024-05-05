import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Header from '../ui/partials/Header/Header';
import LightTheme from '../ui/themes/Light/Light.theme';
import DarkTheme from '../ui/themes/Dark/Dark.theme';
import { PagesType } from '../data/@types/Page/Page.type';
import GlobalStyle from '../ui/styles/Global';
import Navbar from '../ui/partials/Navbar/Navbar';

const Pages = ({ theme, setTheme }: PagesType) => {
  const [fontSize, setFontSize] = useState(16);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? LightTheme : DarkTheme);
  };

  const IsDarkOrLight = () => {
    return theme.title === 'dark';
  };

  const handleIncrementFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 1);
  };
  const handleDecrementFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 1);
  };

  return (
    <Router>
      <GlobalStyle fontSize={fontSize} />
      <Header
        HandleToggleTheme={toggleTheme}
        IsDark={IsDarkOrLight()}
        HandleIncrementFontSize={handleIncrementFontSize}
        HandleDecrementFontSize={handleDecrementFontSize}
      />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Pages;
