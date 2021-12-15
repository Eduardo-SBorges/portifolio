import React from 'react'
import Avatar from '../../components/Avatar/Avatar'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import { GlobalContext } from '../../GlobalContext'
import { Container } from './NavBarContainer.styled'

const NavBarContainer = () => {
	const { open, setOpen } = React.useContext(GlobalContext)
	console.log(open)

	return (
		<Container open={open}>
			<Avatar />
			<NavBar />
			<Footer />
		</Container>
	)
}

export default NavBarContainer
