import React from 'react';
import Title from '../Title/Title';
import { UL, LI, SPAN, Container } from './Information.styled';
import Button from '../Button/Button';
import { animaItems, animaSubItems } from '../../constants/animation';

const Information = ({
  title,
  name,
  nameInfo,
  age,
  ageInfo,
  email,
  emailInfo,
  residence,
  residenceInfo,
  linkedin,
  linkedinInfo,
  github,
  githubInfo,
}) => {
  return (
    <Container variants={animaSubItems} initial="hidden" animate="visible">
      <Title size="h3" text={title} />
      <UL>
        <LI variants={animaSubItems}>
          <SPAN>{nameInfo}</SPAN>
          {name}
        </LI>
        <LI variants={animaSubItems}>
          <SPAN>{ageInfo}</SPAN>
          {age}
        </LI>
        <LI variants={animaSubItems}>
          <SPAN>{emailInfo}</SPAN>
          {email}
        </LI>
        <LI variants={animaSubItems}>
          <SPAN>{residenceInfo}</SPAN>
          {residence}
        </LI>
        <LI variants={animaSubItems}>
          <SPAN>{linkedinInfo}</SPAN>
          {linkedin}
        </LI>
        <LI variants={animaSubItems}>
          <SPAN>{githubInfo}</SPAN>
          {github}
        </LI>
      </UL>
      <Button size="small" text="Download CV" />
    </Container>
  );
};

export default Information;
