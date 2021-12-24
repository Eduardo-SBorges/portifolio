import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Btn = styled(motion.button)`
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
  color: #00a3e1 !important;
  border: 2px solid #ffffff;
  border-radius: 10px;
  border-color: #00a3e1;
  text-transform: uppercase;
  background-color: transparent;
  -webkit-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  min-height: 3.1em;
  cursor: pointer;

  &:hover {
    background-color: #00a3e1;
    color: #000 !important;
    transition: all 0.5s ease;
  }
`;
