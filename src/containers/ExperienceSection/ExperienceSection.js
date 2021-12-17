import Paragraph from '../../components/Paragraph/Paragraph';
import Title from '../../components/Title/Title';
import { personalResume } from '../../constants/data';
import { List, Box, Container } from './ExperienceSection.styled';

const ExperienceSection = () => {
  return (
    <Container>
      <List>
        <Title size="h3" text="PROFISSIONAL" />
        {personalResume.map((experience) => {
          return (
            <li key={experience.id}>
              <span>
                <Paragraph text={experience.dateStart} />
                <Paragraph text={experience.dateEnd} />
              </span>
              <Box>
                <Title size="h4" text={experience.subTitle} />
                <Title size="h5" text={experience.company} />
                <Paragraph text={experience.description} />
              </Box>
            </li>
          );
        })}
      </List>
    </Container>
  );
};
export default ExperienceSection;
