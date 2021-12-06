import React from 'react'
import PropTypes from 'prop-types'
import P from './Paragraph.styled'

const Paragraph = ({
	fontSize,
	fontFamily,
	fontWeight,
	lineHeight,
	textAlign,
	color,
	margin,
	padding,
	width,
	text
}) => {
	return (
		<>
			<P
				fontSize={fontSize}
				fontFamily={fontFamily}
				fontWeight={fontWeight}
				lineHeight={lineHeight}
				textAlign={textAlign}
				color={color}
				margin={margin}
				padding={padding}
				width={width}
			>
				{text}
			</P>
		</>
	)
}

Paragraph.propTypes = {
	color: PropTypes.string.isRequired,
	fontSize: PropTypes.string
}

Paragraph.defaultProps = {
	fontSize: '3rem',
	fontFamily: 'Roboto, sans-serif',
	color: '#000'
}

export default Paragraph
