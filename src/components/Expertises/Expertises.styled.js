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
    border-color: #00a3e1 !important;
    display: inline-block;
    font-size: 28px;
    font-weight: 600;
    line-height: 1em;
    letter-spacing: 0.5px;
    position: relative;
    text-transform: uppercase;
    padding: 5px 10px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  }

  h3::before {
    position: absolute;
    left: 0px;
    content: '';
    width: 2px;
    height: 5px;
    /* background-color: rgba(255, 255, 255, 0.6) ; */
    background-color: #00a3e1;
    bottom: 0;
  }
  h3::after {
    position: absolute;
    content: '';
    right: 0px;
    width: 2px;
    height: 5px;
    background-color: #00a3e1;
    bottom: 0;
  }
`;

export const UL = styled(motion.ul)`
  list-style: none;
  display: flex;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 1100px) {
    flex-direction: column;
  }

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
    margin-bottom: 0;
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: center;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 1.2%;
    margin-left: 1.2%;
  }
`;
