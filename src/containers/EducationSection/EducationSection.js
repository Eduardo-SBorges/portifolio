import Paragraph from '../../components/Paragraph/Paragraph';
import Title from '../../components/Title/Title';
import { personalEducation } from '../../constants/data';
import { List, Box, Container } from './EducationSection.styled';

const EducationSection = () => {
  return (
    <Container>
      <List>
        <Title size="h3" text="EDUCAÇÃO" />
        {personalEducation.map((education) => {
          return (
            <li key={education.id}>
              <span>
                <Paragraph text={education.dateStart} />
                <Paragraph text={education.dateEnd} />
              </span>
              <Box>
                <Title size="h4" text={education.subTitle} />
                <Title size="h5" text={education.school} />
                <Paragraph text={education.description} />
              </Box>
            </li>
          );
        })}
      </List>
    </Container>
  );
};
export default EducationSection;
