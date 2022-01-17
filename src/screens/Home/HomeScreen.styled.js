import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.main)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  top: 0;
  overflow: hidden;
  z-index: -1;

  h1 {
    font-size: 4.75rem;
  }

  span {
    color: ${(props) => props.theme.details};
    border-bottom: 1px solid ${(props) => props.theme.details};
  }
`;

export const BackgroundImage = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BoxTitle = styled(motion.div)`
  position: absolute;

  @media (max-width: 1200px) {
    h1 {
      display: none;
    }
  }
`;

export const BoxTyping = styled(motion.p)`
  margin-top: 2rem;
  font-size: 1.85rem;
`;
