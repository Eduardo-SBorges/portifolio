import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;

  > div {
    position: absolute;
    z-index: 1;
  }
`;
