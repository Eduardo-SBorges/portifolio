import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/GlobalStyle';
import { darkTheme } from './assets/themes';
import NavBarContainer from './containers/NavBarContainer/NavBarContainer';
import Header from './components/Header/Header';
import { Screens } from './App.styled';
import { GlobalContextProvider } from './GlobalContext';
import { AnimatePresence } from 'framer-motion';
import { CfgParticles } from './components/Particles/Particles';
import HomeScreen from './screens/Home/HomeScreen';
import AboutScreen from './screens/About/AboutScreen';
import ResumeScreen from './screens/Resume/ResumeScreen';
import SkillsScreen from './screens/Skills/SkillsScreen';
import PortfolioScreen from './screens/Portfolio/PortfolioScreen';
import ErrorScreen from './screens/Error/ErrorScreen';
import ContactScreen from './screens/Contact/ContactScreen';

const App = () => {
  const location = useLocation();

  return (
    <GlobalContextProvider>
      <CfgParticles />
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Screens>
          <Header />
          <NavBarContainer />
          <AnimatePresence>
            <Routes location={location} key={location.key}>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/about" element={<AboutScreen />} />
              <Route path="/experience" element={<ResumeScreen />} />
              <Route path="/skills" element={<SkillsScreen />} />
              <Route path="/portfolio" element={<PortfolioScreen />} />
              <Route path="/contact" element={<ContactScreen />} />
              <Route path="*" element={<ErrorScreen />} />
            </Routes>
          </AnimatePresence>
        </Screens>
      </ThemeProvider>
    </GlobalContextProvider>
  );
};

export default App;
