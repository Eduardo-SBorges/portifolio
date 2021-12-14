import React from 'react'
import Title from '../Title/Title'
import { personalData } from '../../constants/data'
import { Menu } from '@mui/icons-material'

import { Container, Box } from './Header.styled'

const Header = () => {
	const sizeLogoSvg = `large`

	return (
		<Container>
			<Title size="h2" text={personalData.name} />
			<Box>
				<Menu fontSize={sizeLogoSvg} />
			</Box>
		</Container>
	)
}

export default Header
