import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './assets/GlobalStyle'
import { darkTheme, lightTheme } from './assets/themes'
import About from './screens/About/About'
/* import HomeScreen from './screens/Home/HomeScreen' */
import NavBarContainer from './containers/NavBarContainer/NavBarContainer'
import Header from './components/Header/Header'
import { Screens } from './App.styled'
import { GlobalContextProvider } from './GlobalContext'
import { CfgParticles } from './components/Particles/Particles'
import SkillsScreen from './screens/Skills/SkillsScreen'
import ResumeScreen from './screens/Resume/ResumeScreen'

const App = () => {
	return (
		<GlobalContextProvider>
			<CfgParticles />
			<ThemeProvider theme={darkTheme}>
				<GlobalStyle />
				<Screens>
					<Header />
					<NavBarContainer />
					<About />
					{/* <ResumeScreen/> */}
					{/* <HomeScreen /> */}
					{/* <SkillsScreen /> */}
				</Screens>
			</ThemeProvider>
		</GlobalContextProvider>
	)
}

export default App
