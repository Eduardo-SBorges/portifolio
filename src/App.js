import React from 'react'
import Paragraph from './components/Paragraph/Paragraph.js'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './assets/GlobalStyle.js'
import { darkTheme, lightTheme } from './assets/themes.js'
import Title from './components/Title/Title.js'
import Avatar from './components/Avatar/Avatar.js'

const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyle />
			<Paragraph text="Olá mundo" />
			<Title size="h1" text="titulo" />
			<Avatar text="Arthur Ropke" />
		</ThemeProvider>
	)
}

export default App
