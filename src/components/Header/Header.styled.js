import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding: 1.2rem 0;
  width: 100%;
  background-color: ${(props) => props.theme.menuBackGround};
  text-align: center;
  opacity: 0;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  right: 20px;
  cursor: pointer;

  &:before {
    content: '';
    width: 1px;
    height: 72px;
    background-color: ${(props) => props.theme.backgroundDarkLight};
    position: absolute;
    top: -20px;
    left: -20px;
  }
`;
