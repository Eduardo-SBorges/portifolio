import React from 'react'
import Paragraph from '../../components/Paragraph/Paragraph'
import Title from '../../components/Title/Title'
import { personalData } from '../../constants/data'

import { Container } from './Home.styled'

const Home = () => {
	return (
		<Container>
			<Title size="h1" text={personalData.name} />
			<Paragraph text={personalData.name} />
			{/* <Title size="h2" text={personalData.profission} /> */}
		</Container>
	)
}

export default Home
