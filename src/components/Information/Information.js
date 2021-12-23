import React from 'react'
import Title from '../Title/Title'
import { UL,LI,SPAN,Container } from './Information.styled'
import Button from '../Button/Button'
import { animaItems } from '../../constants/animation'

const Information = ({title,name,nameInfo,age,ageInfo,email,emailInfo,residence,residenceInfo,linkedin,linkedinInfo,github,githubInfo}) => {
	return (
        <Container 
        variants={animaItems}
        initial="hidden"
        animate="visible">
		<Title 
		size='h3' 
		text={title}
		/>
        <UL>
            <LI><SPAN>{nameInfo}</SPAN>{name}</LI>
            <LI><SPAN>{ageInfo}</SPAN>{age}</LI>
            <LI><SPAN>{emailInfo}</SPAN>{email}</LI>
            <LI><SPAN>{residenceInfo}</SPAN>{residence}</LI>
            <LI><SPAN>{linkedinInfo}</SPAN>{linkedin}</LI>
            <LI><SPAN>{githubInfo}</SPAN>{github}</LI>
        </UL>
        <Button size="small" text="Download CV"/>
        </Container>
	)
}

export default Information