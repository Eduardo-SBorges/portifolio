import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  height: 100vh;
  max-width: 200px;
  background-color: ${(props) => props.theme.menuBackGround};
  position: fixed;

  @media (max-width: 788px) {
    display: ${(props) => (props.open ? 'block' : 'none')};
  }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
