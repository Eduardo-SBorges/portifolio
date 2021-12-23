import Styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = Styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 2% 8%;
`;

export const FlexBox = Styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 35px;
  
  @media (max-width: 1400px) {
    flex-direction: column;
    gap: 5rem;
  }

  @media (max-width: 576px) {
    margin-top: 10%;
  }
`;
