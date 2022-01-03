import React from 'react';
import SectionHeaderContainer from '../../containers/SectionHeaderContainer/SectionHeaderContainer';
import CardProject from '../../containers/CardProject/CardProject';
import { Container, FlexBox } from './PortfolioScreen.styled';
import { animaContainer, animaItems } from '../../constants/animation';
import Title from '../../components/Title/Title';

const PortfolioScreen = () => {
  return (
    <Container
      variants={animaContainer}
      initial="hidden"
      animate="visible"
      exit={{
        y: '-100vh',
        x: '-50vw',
        opacity: 0,
        transition: { duration: 2 },
      }}
    >
      <SectionHeaderContainer text="Portfólio" icon="portfolio" />
      <FlexBox variants={animaItems}>
        <Title size="h3" text="WEBSITES" />
        <CardProject />
      </FlexBox>
    </Container>
  );
};

export default PortfolioScreen;
