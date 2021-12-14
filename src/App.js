import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './assets/GlobalStyle'
import { darkTheme, lightTheme } from './assets/themes'
import Home from './screens/Home/Home'
import NavBarContainer from './containers/NavBarContainer/NavBarContainer'
import Header from './components/Header/Header'

const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyle />
			<Header />
			<NavBarContainer />
			<Home />
		</ThemeProvider>
	)
}

export default App
