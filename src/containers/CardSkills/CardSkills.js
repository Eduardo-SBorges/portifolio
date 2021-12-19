import Paragraph from '../../components/Paragraph/Paragraph';
import Title from '../../components/Title/Title';
import { personalSkills } from '../../constants/data';
import { List, Box, Container } from './CardSkills.styled';

const CardSkills = () => {
  return (
    <Container className="scale-in-center">
      <List>
        {personalSkills.map((skill) => {
          return (
            <li key={skill.id}>
              <Box>
                <Title size="h3" text={skill.subTitle} />
                {skill.skills.map((skill) => {
                  return <Title size="h4" key={skill} text={skill} />;
                })}
              </Box>
            </li>
          );
        })}
      </List>
    </Container>
  );
};

export default CardSkills;
