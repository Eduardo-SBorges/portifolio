import styled from 'styled-components'

export const BoxAvatar = styled.div`
	margin: ${props => props.margin};
	width: ${props => props.width};
	height: ${props => props.height};
	position: ${props => props.position};
	top: ${props => props.top};
	bottom: ${props => props.bottom};

	img {
		width: 100%;
	}
`
export const BoxName = styled.div`
	width: 100%;
	padding: 1%;
	background-color: ${props => props.theme.avatarTitle};
	position: ${props => props.position};
	bottom: ${props => props.bottom};
	left: ${props => props.left};
`
