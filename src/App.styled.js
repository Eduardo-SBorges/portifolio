import styled from 'styled-components'

export const Screens = styled.div`
	display: grid;
	grid-template:
		'NavBarContainer Main'
		'NavBarContainer Main'
		/ 200px 1fr;
	@media (max-width: 788px) {
		grid-template:
			'Header Header'
			'Main Main'
			/ 200px 1fr;

		header {
			grid-area: Header;
			opacity: 1;
		}
	}

	nav {
		grid-area: NavBarContainer;
	}

	main {
		grid-area: Main;
	}
`
