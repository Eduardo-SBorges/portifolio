import React from 'react';
import CardSkills from '../../containers/CardSkills/CardSkills';
import SectionHeaderContainer from '../../containers/SectionHeaderContainer/SectionHeaderContainer';
import { Container, FlexBox } from './SkillsScreen.styled';
import { animaContainer } from '../../constants/animation';

const SkillsScreen = () => {
  return (
    <Container variants={animaContainer} initial="hidden" animate="visible">
      <SectionHeaderContainer text="Habilidades" icon="skills" />
      <FlexBox>
        <CardSkills />
      </FlexBox>
    </Container>
  );
};

export default SkillsScreen;
