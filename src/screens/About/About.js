import React from 'react'
import { PersonalInfo } from '../../components/PersonalInfo/PersonalInfo'
import { personalInformation } from '../../constants/data'
import { personalData } from '../../constants/data'
import { Container, FlexBox } from './About.styled'
import Information from '../../components/Information/Information'
import SectionHeaderContainer from '../../containers/SectionHeaderContainer/SectionHeaderContainer';
import Expertises from '../../components/Expertises/Expertises'

const About = () => {
  return (
    <Container>
		<SectionHeaderContainer text="Sobre" icon="about" />
      <FlexBox>
        <PersonalInfo
          title={personalData.aboutMeTitle}
          text={personalData.aboutMeText}
        />
        <Information
          title={personalInformation.title}
          nameInfo="Nome:"
          name={personalInformation.name}
          ageInfo="Idade:"
          age={personalInformation.age}
          emailInfo="Email:"
          email={personalInformation.email}
          residenceInfo="Residência:"
          residence={personalInformation.residence}
          linkedinInfo="Linkedin:"
          linkedin={personalInformation.linkedin}
          githubInfo="Github:"
          github={personalInformation.github}
        />
      </FlexBox>
      <Expertises title='Expertises' />
    </Container>
  )
}

export default About
