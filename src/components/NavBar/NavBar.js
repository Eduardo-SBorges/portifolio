import React from 'react'
// import PropsType from 'prop-types'
import { Container } from './NavBar.styled'
import { navLinks } from '../../constants/navLinks'

export function NavBar(props) {
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
