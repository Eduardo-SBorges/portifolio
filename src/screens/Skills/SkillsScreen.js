import React from 'react';
import CardSkills from '../../containers/CardSkills/CardSkills';
import SectionHeaderContainer from '../../containers/SectionHeaderContainer/SectionHeaderContainer';
import { Container, FlexBox } from './SkillsScreen.styled';

const SkillsScreen = () => {
  return (
    <Container>
      <SectionHeaderContainer text="Habilidades" icon="skills" />
      <FlexBox>
        <CardSkills />
      </FlexBox>
    </Container>
  );
};

export default SkillsScreen;
