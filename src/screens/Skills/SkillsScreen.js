import React from 'react';
import CardSkills from '../../containers/CardSkills/CardSkills';
import SectionHeaderContainer from '../../containers/SectionHeaderContainer/SectionHeaderContainer';
import { Container, FlexBox } from './SkillsScreen.styled';
import { animaContainer } from '../../constants/animation';

const SkillsScreen = () => {
  return (
    <Container
      variants={animaContainer}
      initial="hidden"
      animate="visible"
      exit={{
        y: '-100vh',
        x: '50vw',
        opacity: 0,
        transition: { duration: 2 },
      }}
    >
      <SectionHeaderContainer text="Habilidades" icon="skills" />
      <FlexBox>
        <CardSkills />
      </FlexBox>
    </Container>
  );
};

export default SkillsScreen;
