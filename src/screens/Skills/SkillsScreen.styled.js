import Styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = Styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 4% 8%;
`;

export const FlexBox = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-right: 15%;
  
  @media (max-width: 1400px) {
    flex-direction: column;
    gap: 5rem;
  }
`;
