import React from 'react'
import EducationSection from '../../containers/EducationSection/EducationSection'
import ExperienceSection from '../../containers/ExperienceSection/ExperienceSection'
import SectionHeaderContainer from '../../containers/SectionHeaderContainer/SectionHeaderContainer'
import { Container, FlexBox } from './ResumeScreen.styled'
import { animaContainer, animaContainerResume } from '../../constants/animation'

const ResumeScreen = () => {
	return (
		<Container
			variants={animaContainerResume}
			initial="hidden"
			animate="visible"
		>
			<SectionHeaderContainer text="Experiência" icon="experience" />
			<FlexBox>
				<ExperienceSection />
				<EducationSection />
			</FlexBox>
		</Container>
	)
}

export default ResumeScreen
