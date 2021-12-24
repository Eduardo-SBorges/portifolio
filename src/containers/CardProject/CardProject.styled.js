import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 5% 0;
  color: ${(props) => props.theme.text};
`;

export const FlexBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  border: 2px dashed ${(props) => props.theme.border};
  border-radius: 2%;
  margin-bottom: 5%;
  background-color: #ffffff10;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const FlexBoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 3% 2%;

  @media (max-width: 1200px) {
    margin: 0;
    width: 80%;
  }
`;

export const BoxInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 100%;
  line-height: 1.5;

  h2 {
    font-size: 24px;
  }

  p {
    font-size: 14px;
  }

  @media (max-width: 1300px) {
    gap: 1rem;
  }

  @media (max-width: 1200px) {
    text-align: center;
    gap: 1rem;
  }
`;

export const BoxTechnologies = styled.div`
  h3 {
    margin-bottom: 0.5rem;
  }
  line-height: 1.5rem;
`;

export const BoxButtons = styled.div`
  display: flex;
  justify-content: start;
  gap: 0.5rem;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const BoxButtonsMedia = styled.div`
  @media (min-width: 1201px) {
    display: none;
  }

  @media (max-width: 1200px) {
    margin: 2% 0;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 0.5rem;

    button {
      padding: 3px !important;
      width: auto !important;
      font-size: 10px !important;
    }
  }
`;

export const FlexBoxRight = styled.div`
  display: flex;
  justify-content: end;
  padding: 2%;
  width: 70%;

  @media (max-width: 1480px) {
    width: 80%;
  }

  @media (max-width: 1360px) {
    width: 70%;
  }

  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
  }

  img {
    width: 100%;
    border-radius: 2%;
  }
`;
