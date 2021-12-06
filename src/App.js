import React from 'react'
import Paragraph from './components/Paragraph/Paragraph.js'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './assets/GlobalStyle.js'
import { darkTheme, lightTheme } from './assets/themes.js'

const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyle />
			<Paragraph text="Olá mundo" />
		</ThemeProvider>
	)
}

export default App
