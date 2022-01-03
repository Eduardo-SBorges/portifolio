import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/GlobalStyle';
import { darkTheme, lightTheme } from './assets/themes';
import NavBarContainer from './containers/NavBarContainer/NavBarContainer';
import Header from './components/Header/Header';
import { Screens } from './App.styled';
import { GlobalContextProvider } from './GlobalContext';
import { CfgParticles } from './components/Particles/Particles';
import HomeScreen from './screens/Home/HomeScreen';
import AboutScreen from './screens/About/AboutScreen';
import ResumeScreen from './screens/Resume/ResumeScreen';
import SkillsScreen from './screens/Skills/SkillsScreen';
import ErrorScreen from './screens/Error/ErrorScreen';
import ContactScreen from './screens/Contact/ContactScreen';

const App = () => {
  return (
    <GlobalContextProvider>
      <CfgParticles />
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Screens>
          <Header />
          <NavBarContainer />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/sobre" element={<AboutScreen />} />
            <Route path="/experiencia" element={<ResumeScreen />} />
            <Route path="/habilidades" element={<SkillsScreen />} />
            <Route path="/portfolio" element={<ErrorScreen />} />
            <Route path="/contato" element={<ContactScreen />} />
          </Routes>
        </Screens>
      </ThemeProvider>
    </GlobalContextProvider>
  );
};

export default App;
