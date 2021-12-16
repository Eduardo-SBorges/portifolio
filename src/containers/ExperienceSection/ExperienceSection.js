import Paragraph from '../../components/Paragraph/Paragraph'
import Title from '../../components/Title/Title'
import { personalResume, personalEducation } from '../../constants/data'
import SectionHeaderContainer from '../SectionHeaderContainer/SectionHeaderContainer'
import {
	Container,
	Box,
	BoxExperienceSection,
	BoxUl
} from './ExperienceSection.styled'

const ExperienceSection = () => {
	return (
		<BoxExperienceSection>
			<SectionHeaderContainer text="Minhas Experiências" icon="experience" />
			<BoxUl>
				<Container>
					{personalResume.map(experience => {
						return (
							<li key={experience.id}>
								<span>
									<Paragraph text={experience.dateStart} />
									<Paragraph text={experience.dateEnd} />
								</span>
								<Box>
									<Title size="h4" text={experience.subTitle} />
									<Title size="h5" text={experience.company} />
									<Paragraph text={experience.description} />
								</Box>
							</li>
						)
					})}
				</Container>
				<Container>
					{personalEducation.map(education => {
						return (
							<li key={education.id}>
								<span>
									<Paragraph text={education.dateStart} />
									<Paragraph text={education.dateEnd} />
								</span>
								<Box>
									<Title size="h4" text={education.subTitle} />
									<Title size="h5" text={education.school} />
									<Paragraph text={education.description} />
								</Box>
							</li>
						)
					})}
				</Container>
			</BoxUl>
		</BoxExperienceSection>
	)
}
export default ExperienceSection
