import Styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = Styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 2% 8%;
`;

export const FlexBox = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  ul {
    padding: 1% 3%;
    border-radius: 2%;
    border: 1px dashed ${(props) => props.theme.border};
    background-color: #ffffff10;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);

    button {
      font-size: 16px;
      color: ${(props) => props.theme.text};
      text-transform: uppercase;
      background: none;
      border-radius: 0.5rem;
      display: inline;
      padding: 12px;
      margin: 0 5px;
      cursor: pointer;
      position: relative;

      &:hover {
        color: ${(props) => props.theme.textInverse};
        background-color: ${(props) => props.theme.backgroundInverse};
        transition: all 0.5s ease;
      }
    }

    .active {
        color: ${(props) => props.theme.textInverse};
        background-color: ${(props) => props.theme.backgroundInverse};
      }
  }
  
  @media (max-width: 1400px) {
    flex-direction: column;
    gap: 5rem;
  }
`;
