import React from 'react'
import { GlobalContext } from '../../GlobalContext'
import Title from '../Title/Title'
import { personalData } from '../../constants/data'
import { Menu } from '@mui/icons-material'

import { Container, Box } from './Header.styled'

const Header = () => {
	const { open, setOpen } = React.useContext(GlobalContext)
	const toggle = () => setOpen(!open)

	const sizeLogoSvg = `large`

	return (
		<Container>
			<Title size="h2" text={personalData.name} />
			<Box>
				<Menu fontSize={sizeLogoSvg} onClick={toggle} />
			</Box>
		</Container>
	)
}

export default Header
