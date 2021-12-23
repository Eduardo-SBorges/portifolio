import React from 'react';
import SectionHeaderContainer from '../../containers/SectionHeaderContainer/SectionHeaderContainer';
import { Container } from './ErrorScreen.styled';
import { animaContainer } from '../../constants/animation';

const ErrorScreen = () => {
  return (
    <Container variants={animaContainer} initial="hidden" animate="visible">
      <SectionHeaderContainer
        text="ERRO 404 - Esta página não existe"
        icon="error"
      />
    </Container>
  );
};

export default ErrorScreen;
