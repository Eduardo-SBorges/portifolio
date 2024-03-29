import styled from 'styled-components';
import { motion } from 'framer-motion';

const P = styled(motion.p)`
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.theme.text};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  letter-spacing: ${(props) => props.letterSpacing};
`;

export default P;
