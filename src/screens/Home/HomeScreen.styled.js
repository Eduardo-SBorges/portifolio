import styled from 'styled-components';
import homeBg from '../../assets/img/home-bg.jpg';

export const Container = styled.main`
  background: url(${homeBg}) no-repeat center;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4.75rem;
  }

  p {
    margin-top: 2rem;
    font-size: 1.85rem;
  }
`;
