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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  > h3 {
    font-size: 28px;
    padding: 0 10px;
    position: relative;
    border-bottom: 1px solid #00A3E1;

    &::before {
      position: absolute;
      content: "";
      width: 2px;
      height: 5px;
      left: 0;
      background-color: #00A3E1;
      bottom: 0;
    }

    &::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 5px;
    right: 0;
    background-color: #00A3E1;
    bottom: 0;
    }
  }
`;
