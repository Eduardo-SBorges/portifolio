import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 66.6%;
  height: 100%;
  padding-right: 15px;
  padding-left: 15px;

  h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    color: ${(props) => props.theme.text};
    line-height: 1.2;
  }

  p {
    line-height: 1.65;
    margin-bottom: 1rem;
    font-size: 16px;
    color: ${(props) => props.theme.text};
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }
`;

export default Container;
