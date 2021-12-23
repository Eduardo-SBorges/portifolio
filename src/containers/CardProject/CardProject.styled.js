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
  border: 1px dashed ${(props) => props.theme.border};
  border-radius: 2%;
  margin-bottom: 5%;
  background-color: #ffffff10;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
`;

export const FlexBoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 3% 2%;
`;

export const BoxInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-direction: column;
  gap: 3rem;
`;

export const BoxTechnologies = styled.div`
  h3 {
    margin-bottom: 0.5rem;
  }
  line-height: 1.5rem;
`;

export const BoxButtons = styled.div`
  button {
    margin-top: 1rem;
  }
`;

export const FlexBoxRight = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2%;

  img {
    width: 100%;
    border-radius: 2%;
  }
`;
