import Styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = Styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 91.5%;
  margin: 4%;
`;

export const FlexBox = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  @media (max-width: 1400px) {
    flex-direction: column;
    gap: 5rem;
  }

  @media (max-width: 576px) {
    margin-top: 10%;
  }
`;
