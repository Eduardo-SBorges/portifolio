import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  margin-bottom: 30px !important;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  @media (max-width: 1100px) {
    margin-top: -30px;
  }
`;
export const Header = styled(motion.div)`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: 50px;
  text-align: center;

  h3 {
    border-color: ${(props) => props.theme.details};
    display: inline-block;
    font-size: 28px;
    font-weight: 600;
    line-height: 1em;
    letter-spacing: 0.5px;
    position: relative;
    text-transform: uppercase;
    padding: 5px 10px;
    border-bottom: 2px solid ${(props) => props.theme.details};
  }

  h3::before {
    position: absolute;
    left: 0px;
    content: '';
    width: 2px;
    height: 5px;
    background-color: ${(props) => props.theme.details};
    bottom: 0;
  }
  h3::after {
    position: absolute;
    content: '';
    right: 0px;
    width: 2px;
    height: 5px;
    background-color: ${(props) => props.theme.details};
    bottom: 0;
  }
`;

export const UL = styled(motion.ul)`
  text-align: center;
  list-style: none;
  display: flex;
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  margin-left: 5%;

  @media (max-width: 1180px) {
    flex-direction: column;
    margin-left: 0;
  }

  svg {
    font-size: 50px;
    margin-bottom: 10px;
    line-height: 1em;
  }

  h4 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: -1%;
    border-bottom: 1px solid ${(props) => props.theme.details};
  }
  p {
    font-size: 14.5px;
    line-height: 22px;
    margin-top: 15px;
    margin-bottom: 40px;
    text-align: center;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.3rem;
    margin-right: 4%;
    margin-left: 4%;
  }
`;
