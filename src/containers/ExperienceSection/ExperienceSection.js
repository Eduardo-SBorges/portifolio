import Paragraph from '../../components/Paragraph/Paragraph';
import Title from '../../components/Title/Title';
import { personalResume } from '../../constants/data';
import { List, Box, Container } from './ExperienceSection.styled';
import { motion } from 'framer-motion';
import { animaLine, animaSubItems } from '../../constants/animation';

const ExperienceSection = () => {
  return (
    <Container>
      <List>
        <Title size="h3" text="PROFISSIONAL" />
        {personalResume.map((experience) => {
          return (
            <motion.li key={experience.id} variants={animaSubItems}>
              <motion.span variants={animaLine}>
                <Paragraph text={experience.dateStart} />
                <Paragraph text={experience.dateEnd} />
              </motion.span>
              <Box>
                <Title size="h4" text={experience.subTitle} />
                <Title
                  size="h5"
                  text={
                    experience.company +
                    ' ~ ' +
                    experience.dateStart +
                    ' à ' +
                    experience.dateEnd
                  }
                />
                <Paragraph text={experience.description} />
              </Box>
            </motion.li>
          );
        })}
      </List>
    </Container>
  );
};
export default ExperienceSection;
