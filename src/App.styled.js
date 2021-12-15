import styled from 'styled-components'

export const Screens = styled.div`
	display: grid;
	grid-template:
		'NavBarContainer Home'
		'NavBarContainer Home'
		/ 200px 1fr;
	@media (max-width: 768px) {
		grid-template:
			'Header Header'
			'Home Home'
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
		grid-area: Home;
	}
`
