import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './assets/GlobalStyle'
import { darkTheme, lightTheme } from './assets/themes'
import Avatar from './components/Avatar/Avatar'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyle />
			<Avatar />
			<NavBar />
			<Footer />
		</ThemeProvider>
	)
}

export default App
