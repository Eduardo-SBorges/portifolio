import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  height: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 1100px) {
    width: 100%;
    text-align: center;
  }

  h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    color: ${(props) => props.theme.text};
    line-height: 1.2;

    @media (max-width: 1100px) {
      width: 100%;
      text-align: center;
    }
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
