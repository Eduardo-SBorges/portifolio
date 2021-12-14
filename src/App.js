import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './assets/GlobalStyle'
import { darkTheme, lightTheme } from './assets/themes'
import Home from './screens/Home/Home'

const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyle />
			<Home />
		</ThemeProvider>
	)
}

export default App
