import React from 'react';
import Title from '../Title/Title';
import { UL, LI, SPAN, Container } from './Information.styled';
import Button from '../Button/Button';
import { animaSubItems } from '../../constants/animation';
import arquiveTXT from '../../assets/download/exemplo.txt';

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
          <a href={linkedin}>Acesse o Link Aqui</a>
        </LI>
        <LI variants={animaSubItems}>
          <SPAN>{githubInfo}</SPAN>
          <a href={github}>Acesse o Link Aqui</a>
        </LI>
      </UL>
      <a href={arquiveTXT} download>
        <Button size="small" text="Download CV" />
      </a>
    </Container>
  );
};

export default Information;
