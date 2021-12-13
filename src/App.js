import React from 'react'
import Paragraph from './components/Paragraph/Paragraph.js'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './assets/GlobalStyle.js'
import { darkTheme, lightTheme } from './assets/themes.js'
import Title from './components/Title/Title.js'
import Avatar from './components/Avatar/Avatar.js'
import { NavBar } from './components/NavBar/NavBar.js'

const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyle />
			<Avatar text="Arthur Ropke" />
			<NavBar />
		</ThemeProvider>
	)
}

export default App
