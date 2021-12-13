import styled from 'styled-components'

export const Container = styled.nav`
	ul {
		li {
			width: 100%;
			max-width: 200px;
			display: flex;
			align-items: center;
			gap: 0.5rem;
			padding: 0.5% 1%;
			border-bottom: 1px solid #ccc;

			a {
				color: ${props => props.theme.text};
				line-height: 2.5rem;
				font-size: 0.8rem;
				letter-spacing: 0.05rem;
			}
		}
	}
`
