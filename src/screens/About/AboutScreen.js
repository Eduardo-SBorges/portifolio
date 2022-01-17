import React from 'react';
import { PersonalInfo } from '../../components/PersonalInfo/PersonalInfo';
import { personalInformation } from '../../constants/data';
import { personalData } from '../../constants/data';
import { Container, FlexBox } from './AboutScreen.styled';
import Information from '../../components/Information/Information';
import SectionHeaderContainer from '../../containers/SectionHeaderContainer/SectionHeaderContainer';
import Expertises from '../../components/Expertises/Expertises';
import { animaContainer, animaItems } from '../../constants/animation';

const About = () => {
  return (
    <Container
      variants={animaContainer}
      initial="hidden"
      animate="visible"
      exit={{
        y: '100vh',
        x: '-50vw',
        opacity: 0,
        transition: { duration: 2 },
      }}
    >
      <SectionHeaderContainer text="Sobre" icon="about" />
      <FlexBox variants={animaItems} initial="hidden" animate="visible">
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
          languagesInfo="Idiomas:"
          languages={personalInformation.languages}
          stateInfo="Estado Cívil:"
          state={personalInformation.state}
          emailInfo="E-mail:"
          email={personalInformation.email}
          residenceInfo="Residência:"
          residence={personalInformation.residence}
          linkedinInfo="Linkedin:"
          linkedin={personalInformation.linkedin}
          githubInfo="Github:"
          github={personalInformation.github}
        />
      </FlexBox>
      <Expertises title="Expertises" />
    </Container>
  );
};

export default About;
