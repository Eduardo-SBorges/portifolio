import styled from 'styled-components'

export const Container = styled.nav`
	width: 100%;
	height: 100vh;
	max-width: 200px;
	background-color: ${props => props.theme.menuBackGround};
	position: relative;

	@media (max-width: 768px) {
		display: ${props => (props.open ? 'block' : 'none')};
		position: absolute;
	}
`
