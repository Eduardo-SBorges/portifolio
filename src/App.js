import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './assets/GlobalStyle'
import { darkTheme, lightTheme } from './assets/themes'
import Home from './screens/Home/Home'
import NavBarContainer from './containers/NavBarContainer/NavBarContainer'
import Header from './components/Header/Header'
import { Screens } from './App.styled'
import { GlobalContextProvider } from './GlobalContext'
import { CfgParticles } from './components/Particles/Particles'


const App = () => {
	return (
		<GlobalContextProvider>
			<CfgParticles />
			<ThemeProvider theme={darkTheme}>
				<GlobalStyle />
				<Screens>
					<Header />
					<NavBarContainer />
					<Home />
				</Screens>
			</ThemeProvider>
		</GlobalContextProvider>
	)
}

export default App
