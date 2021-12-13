import React from 'react'
import Title from '../Title/Title'
import { BoxAvatar, BoxName } from './Avatar.styled'
import PropTypes from 'prop-types'
import { personalData } from '../../constants/data'

const Avatar = ({ margin, width, height, position, top, bottom }) => {
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
				<Title size="h2" text={personalData.name} textAlign="center" />
			</BoxName>
			<img src={personalData.imgProfileSrc} alt={personalData.name} />
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
