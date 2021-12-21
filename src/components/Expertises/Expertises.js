import React from 'react'
import Title from '../Title/Title'
import { Container, Header,UL } from './Expertises.styled'
import { expert } from '../../constants/data'
import Paragraph from '../Paragraph/Paragraph'
const Expertises = ({ title }) => {
  return (
    <Container>
      <Header>
        <Title size="h3" text={title} />
      </Header>
      <div>
      <UL>
				{expert.map(expertises => (
					<li>
            {expertises.icon}
            <Title size="h4" text={expertises.title} />
						<Paragraph text={expertises.description} />
					</li>
				))}
        </UL>
      </div>
    </Container>
  )
}

export default Expertises
