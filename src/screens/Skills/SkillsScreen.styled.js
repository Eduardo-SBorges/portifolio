import Styled from 'styled-components';

export const Container = Styled.main`
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
  width: 100%;
  
  @media (max-width: 1400px) {
    flex-direction: column;
    gap: 5rem;
  }
`;
