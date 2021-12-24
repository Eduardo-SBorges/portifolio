import Title from '../../components/Title/Title';
import { personalSkills } from '../../constants/data';
import { List, Box, Container } from './CardSkills.styled';
import { motion } from 'framer-motion';
import { animaItems, animaSubItems } from '../../constants/animation';

const CardSkills = () => {
  return (
    <Container className="scale-in-center">
      <List>
        {personalSkills.map((skill) => {
          return (
            <motion.li key={skill.id} variants={animaItems}>
              <Box>
                <Title size="h3" text={skill.subTitle} />
                {skill.skills.map((skill, index) => {
                  return (
                    <motion.div variants={animaSubItems} key={index}>
                      <Title size="h4" key={skill} text={skill} />
                    </motion.div>
                  );
                })}
              </Box>
            </motion.li>
          );
        })}
      </List>
    </Container>
  );
};

export default CardSkills;
