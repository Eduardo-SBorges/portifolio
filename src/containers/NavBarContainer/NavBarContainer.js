import Avatar from '../../components/Avatar/Avatar'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

import { Container } from './NavBarContainer.styled'

const NavBarContainer = () => {
	return (
		<Container>
			<Avatar />
			<NavBar />
			<Footer />
		</Container>
	)
}

export default NavBarContainer
