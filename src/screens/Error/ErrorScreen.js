import React from 'react';
import SectionHeaderContainer from '../../containers/SectionHeaderContainer/SectionHeaderContainer';
import { Container } from './ErrorScreen.styled';
import { animaContainer } from '../../constants/animation';

const ErrorScreen = () => {
  return (
    <Container
      variants={animaContainer}
      initial="hidden"
      animate="visible"
      exit={{
        scale: -1,
        opacity: 0,
        transition: { duration: 2 },
      }}
    >
      <SectionHeaderContainer
        text="ERRO 404 - Esta página não existe"
        icon="error"
      />
    </Container>
  );
};

export default ErrorScreen;
