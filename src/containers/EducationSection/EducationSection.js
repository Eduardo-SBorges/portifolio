import Paragraph from '../../components/Paragraph/Paragraph';
import Title from '../../components/Title/Title';
import { personalEducation } from '../../constants/data';
import { List, Box, Container } from './EducationSection.styled';
import { motion } from 'framer-motion';
import { animaSubItems, animaLine } from '../../constants/animation';

const EducationSection = () => {
  return (
    <Container>
      <List>
        <Title size="h3" text="EDUCAÇÃO" />
        {personalEducation.map((education) => {
          return (
            <motion.li key={education.id} variants={animaSubItems}>
              <motion.span variants={animaLine}>
                <Paragraph text={education.dateStart} />
                <Paragraph text={education.dateEnd} />
              </motion.span>
              <Box>
                <Title size="h4" text={education.subTitle} />
                <Title
                  size="h5"
                  text={
                    education.school +
                    ' ~ ' +
                    education.dateStart +
                    ' à ' +
                    education.dateEnd
                  }
                />
                <Paragraph text={education.description} />
              </Box>
            </motion.li>
          );
        })}
      </List>
    </Container>
  );
};
export default EducationSection;
