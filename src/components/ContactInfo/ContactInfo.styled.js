import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  margin-bottom: 5%;
`;

export const UL = styled(motion.ul)`
  list-style: none;
  display: flex;

  svg {
    font-size: 50px;
    margin-bottom: 10px;
    line-height: 1em;
  }

  h4 {
    font-size: 18px;
    font-weight: 600;
  }

  p {
    font-size: 14.5px;
    line-height: 22px;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  li {
    display: flex;
    align-items: center;
    flex-direction: column;
    white-space: nowrap;
    min-width: 200px;

    @media (max-width: 400px) {
      min-width: 160px;
    }
  }
`;
