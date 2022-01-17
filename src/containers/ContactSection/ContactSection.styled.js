import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.section`
  width: 100%;
  font-family: 'Roboto', sans-serif;
  line-height: 1.65;
  position: relative;
`;

export const BoxHeader = styled.div`
  width: 100%;
  margin-top: 1%;
  margin-bottom: 5%;
  padding-right: 15px;
  padding-left: 15px;
  text-align: center;

  @media (max-width: 578px) {
    margin-bottom: 10%;
  }

  h3 {
    border-color: ${(props) => props.theme.details};
    display: inline-block;
    font-size: 22px;
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

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;

  label {
    font-size: ${(props) => props.fontSize};
  }

  > div {
    align-self: start;
    width: 100%;
  }
`;
export const BoxInput = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2%;
  margin-bottom: 50px;
  margin-top: 5%;
  width: 100%;
  position: relative;
  z-index: 1;

  input {
    height: 40px;
    border-radius: 5px;
  }
  label {
    position: absolute;
    top: ${(props) => props.top}; //7px;
    font-size: ${(props) => props.fontSize};
  }
`;

export const BoxInputLabel = styled.div`
  width: 100%;
  label {
    margin-bottom: 5px;
  }
`;

export const BoxTextArea = styled(motion.div)`
  position: relative;
  z-index: 1;

  input {
    height: 150px;
    border-radius: 5px;
  }

  label {
    position: absolute;
    top: ${(props) => props.top}; //7px;
    margin-left: ${(props) => props.marginLeft}; //15px
    font-size: ${(props) => props.fontSize};
  }
`;

export const BoxButton = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  button {
    height: 100%;
    margin: 4% 0;
    text-align: center;
    z-index: 1;

    @media (max-width: 1100px) {
      margin: 8% 0;
    }
    @media (max-width: 578px) {
      margin: 10% 0;
    }
  }
`;

export const BoxContact = styled(motion.div)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
`;

export const BoxMap = styled(motion.div)`
  width: 100%;
  margin-top: -2%;
  border-radius: 5px;
  overflow: hidden;
  position: absolute;
  left: 0;
  z-index: 1;
`;

export const EmptyBox = styled.div`
  width: 1px;
  height: 1px;
  margin: 6% 0;

  @media (max-width: 1700px) {
    margin: 10% 0;
  }

  @media (max-width: 1500px) {
    margin: 14% 0;
  }

  @media (max-width: 1300px) {
    margin: 18% 0;
  }

  @media (max-width: 1100px) {
    margin: 22% 0;
  }

  @media (max-width: 900px) {
    margin: 26% 0;
  }

  @media (max-width: 700px) {
    margin: 30% 0;
  }

  @media (max-width: 500px) {
    margin: 38% 0;
  }

  @media (max-width: 400px) {
    margin: 45% 0;
  }
`;
