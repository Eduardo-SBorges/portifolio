import React from 'react';
import Title from '../Title/Title';
import { Container, Header, UL } from './Expertises.styled';
import { expert } from '../../constants/data';
import Paragraph from '../Paragraph/Paragraph';
import { motion } from 'framer-motion';
import { animaItems } from '../../constants/animation';

const Expertises = ({ title }) => {
  return (
    <Container initial="hidden" animate="visible" variants={animaItems}>
      <Header initial="hidden" animate="visible" variants={animaItems}>
        <Title size="h3" text={title} variants={animaItems} />
      </Header>
      <motion.div initial="hidden" animate="visible" variants={animaItems}>
        <UL variants={animaItems}>
          {expert.map((expertises, index) => (
            <motion.li key={index} variants={animaItems}>
              {expertises.icon}
              <Title size="h4" text={expertises.title} />
              <Paragraph text={expertises.description} />
            </motion.li>
          ))}
        </UL>
      </motion.div>
    </Container>
  );
};

export default Expertises;
