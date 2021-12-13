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
	letterSpacing,
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
				letterSpacing={letterSpacing}
			>
				{text}
			</P>
		</>
	)
}

Paragraph.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.string,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	lineHeight: PropTypes.string,
	textAlign: PropTypes.string,
	margin: PropTypes.string,
	padding: PropTypes.string,
	width: PropTypes.string,
	text: PropTypes.string,
	letterSpacing: PropTypes.string
}

Paragraph.defaultProps = {
	fontFamily: 'Roboto, sans-serif',
	letterSpacing: '0.05rem'
}

export default Paragraph
