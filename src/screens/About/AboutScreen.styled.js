import Styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = Styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 91.5%;
  margin: 4%;
`;

export const FlexBox = Styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  position: relative;
  
  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 576px) {
    margin-top: 10%;
  }
`;
