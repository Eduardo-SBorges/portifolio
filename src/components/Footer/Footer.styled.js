import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  max-width: 200px;
  margin-top: 5%;
  position: absolute;
  bottom: 0;
  margin-bottom: 3%;

  p {
    margin-top: 0.5rem;
    text-align: center;
    font-size: 0.8rem;
  }
`;

export const BoxSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  a {
    color: ${(props) => props.theme.text};
  }
`;
