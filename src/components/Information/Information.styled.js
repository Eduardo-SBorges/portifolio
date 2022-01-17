import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 40%;

  @media (max-width: 1100px) {
    width: 90%;
    height: 600px;
    margin-top: -180px;
    text-align: start;
    align-items: center;

    a {
      @media (max-width: 1100px) {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    color: ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.details};
    line-height: 1.2;

    @media (max-width: 1100px) {
      width: 100%;
      text-align: center;
    }
  }

  a {
    color: ${(props) => props.theme.text};
    text-decoration: underline;
  }

  line-height: 1.65;
  margin-bottom: 1rem;
  font-size: 16px;
  color: ${(props) => props.theme.text};
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
`;

export const UL = styled.ul`
  list-style: none;
  text-decoration: none;
  margin-bottom: 1rem;
`;

export const LI = styled(motion.li)`
  line-height: 1em;
  margin-bottom: 15px;

  &:first-child {
    margin-top: 1%;
  }
`;

export const SPAN = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #ffffff;
  border-bottom-color: rgb(255, 255, 255);
  position: relative;
  display: inline-block;
  margin-right: 15px;
  margin-bottom: -5px;
  padding-bottom: 1px;
  color: #ffffff;
  border-color: ${(props) => props.theme.details};
`;
