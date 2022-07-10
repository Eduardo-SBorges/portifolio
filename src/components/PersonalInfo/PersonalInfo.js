import React from 'react';
import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';
import Container from './PersonalInfo.styled';
import { animaItems, animaSubItems } from '../../constants/animation';

export const PersonalInfo = ({ title, text_one, text_two }) => {
  return (
    <Container variants={animaItems}>
      <Title size="h3" text={title} variants={animaSubItems} />
      <Paragraph text={text_one} variants={animaSubItems} />
      <Paragraph text={text_two} variants={animaSubItems} />
    </Container>
  );
};
