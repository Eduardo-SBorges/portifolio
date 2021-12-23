import React from 'react'
import Title from '../Title/Title'
import P from '../Paragraph/Paragraph'
import Container from './PersonalInfo.styled'

export const PersonalInfo = ({title,text}) => {
	return (
        <Container>
		<Title 
		size='h3' 
		text={title}
		/>
		<P text={text}></P>
        </Container>
	)
}