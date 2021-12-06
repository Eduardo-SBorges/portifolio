import React from 'react'
import Title from '../Title/Title'
import imgAvatar from '../../assets/img/avatar.jpg'
import { BoxAvatar, BoxName } from './Avatar.styled'
import PropTypes from 'prop-types'

const Avatar = ({ margin, width, height, position, top, bottom, text }) => {
	return (
		<BoxAvatar
			margin={margin}
			width={width}
			height={height}
			position={position}
			top={top}
			bottom={bottom}
		>
			<BoxName position="absolute" bottom="0">
				<Title size="h2" text={text} textAlign="center" />
			</BoxName>
			<img src={imgAvatar} alt={text} />
		</BoxAvatar>
	)
}

Avatar.propTypes = {
	margin: PropTypes.string,
	padding: PropTypes.string,
	width: PropTypes.string,
	text: PropTypes.string,
	size: PropTypes.string,
	position: PropTypes.string
}

Avatar.defaultProps = {
	width: '200px',
	height: '200px',
	position: 'relative'
}

export default Avatar
