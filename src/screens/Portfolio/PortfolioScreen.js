import React from 'react';
import SectionHeaderContainer from '../../containers/SectionHeaderContainer/SectionHeaderContainer';
import CardProject from '../../containers/CardProject/CardProject';
import { Container, FlexBox } from './PortfolioScreen.styled';
import { motion } from 'framer-motion';
import {
  animaContainer,
  animaItems,
  animaSubItems,
} from '../../constants/animation';

const PortfolioScreen = () => {
  const handleError = () => {
    alert('Não há dados a serem exibidos ainda.');
  };

  return (
    <Container variants={animaContainer} initial="hidden" animate="visible">
      <SectionHeaderContainer text="Portfólio" icon="portfolio" />
      <FlexBox>
        <motion.ul variants={animaSubItems}>
          <button className="active">Websites</button>
          <button onClick={handleError}>Softwares</button>
          <button onClick={handleError}>Animações</button>
          <button onClick={handleError}>Eventos</button>
        </motion.ul>
        <CardProject />
      </FlexBox>
    </Container>
  );
};

export default PortfolioScreen;
