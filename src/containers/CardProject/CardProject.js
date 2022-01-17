import React from 'react';
import Title from '../../components/Title/Title';
import Paragraph from '../../components/Paragraph/Paragraph';
import Button from '../../components/Button/Button';
import {
  Container,
  FlexBox,
  FlexBoxLeft,
  FlexBoxRight,
  BoxInfo,
  BoxTechnologies,
  BoxButtons,
  BoxButtonsMedia,
} from './CardProject.styled';
import { personalProjects } from '../../constants/data';
import { animaItems } from '../../constants/animation';

const CardProject = () => {
  return (
    <Container>
      {personalProjects.map((project) => {
        return (
          <FlexBox variants={animaItems} key={project.id}>
            <FlexBoxLeft>
              <BoxInfo>
                <Title size="h2" text={project.subTitle} />
                <Paragraph text={project.description} />
                <BoxTechnologies>
                  <Title size="h3" text="Tecnologias Utilizadas:" />
                  <Paragraph text={`${project.technologies.join(', ')}.`} />
                </BoxTechnologies>
                <BoxButtons>
                  <a href={project.urlRepository}>
                    <Button text="Repositório" />
                  </a>
                  {project.urlProject && (
                    <a href={project.urlProject}>
                      <Button text="Visitar" />
                    </a>
                  )}
                </BoxButtons>
              </BoxInfo>
            </FlexBoxLeft>
            <FlexBoxRight>
              <img src={project.img} alt={project.subTitle} />
              <BoxButtonsMedia>
                <a href={project.urlRepository}>
                  <Button text="Repositório" size="small" />
                </a>
                {project.urlProject && (
                  <a href={project.urlProject}>
                    <Button text="Visitar" />
                  </a>
                )}
              </BoxButtonsMedia>
            </FlexBoxRight>
          </FlexBox>
        );
      })}
    </Container>
  );
};

export default CardProject;
