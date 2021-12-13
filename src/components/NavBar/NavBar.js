import React from 'react'
import { Container } from './NavBar.styled'
import { navLinks } from '../../constants/navLinks'

const NavBar = () => {
	return (
		<Container>
			<ul>
				{navLinks.map(link => (
					<li key={link.name}>
						{link.svgLogo}
						<a href="https://www.google.com.br/">{link.name}</a>
					</li>
				))}
			</ul>
		</Container>
	)
}

export default NavBar
