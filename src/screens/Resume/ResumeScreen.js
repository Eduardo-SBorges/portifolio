import React from 'react';
import EducationSection from '../../containers/EducationSection/EducationSection';
import ExperienceSection from '../../containers/ExperienceSection/ExperienceSection';
import SectionHeaderContainer from '../../containers/SectionHeaderContainer/SectionHeaderContainer';
import { Container, FlexBox } from './ResumeScreen.styled';
import { animaContainer, animaItems } from '../../constants/animation';

const ResumeScreen = () => {
  return (
    <Container
      variants={animaContainer}
      initial="hidden"
      animate="visible"
      exit={{
        y: '100vh',
        x: '50vw',
        opacity: 0,
        transition: { duration: 2 },
      }}
    >
      <SectionHeaderContainer text="Experiência" icon="experience" />
      <FlexBox variants={animaItems}>
        <ExperienceSection />
        <EducationSection />
      </FlexBox>
    </Container>
  );
};

export default ResumeScreen;
