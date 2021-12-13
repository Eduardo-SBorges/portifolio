import React from 'react'
import { logoSocial, personalData } from '../../constants/data'
import { time } from '../../constants/time'
import { Container, BoxSocial } from './Footer.styled'
import Paragraph from '../Paragraph/Paragraph.js'

const Footer = () => {
	return (
		<Container>
			<BoxSocial>
				{logoSocial.map(social => (
					<a href={social.url} target="_blank" rel="noreferrer">
						{social.svgRede}
					</a>
				))}
			</BoxSocial>
			<Paragraph text={`${time.year} @ ${personalData.name}.`} />
			<Paragraph text="Todos os direitos reservados." />
		</Container>
	)
}

//
export default Footer
