import Styled from 'styled-components';

export const Container = Styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index: -1;
  
  h3 {
    font-size: 28px;
    padding: 0 10px;
    position: relative;
    border-bottom: 1px solid ${(props) => props.theme.details};

    &::before {
      position: absolute;
      content: "";
      width: 2px;
      height: 5px;
      left: 0;
      background-color: ${(props) => props.theme.details};
      bottom: 0;
    }

    &::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 5px;
    right: 0;
    background-color: ${(props) => props.theme.details};
    bottom: 0;
    }
  }

  h4 {
    font-size: 20px;
  }

  h5 {
    font-size: 18px;
    color: ${(props) => props.theme.details};
  }
`;

export const List = Styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  width: 90%;
  height: 100%;

  li{
    display: flex;
    align-items: center;
    justify-content: center;

    span{
      background-color: ${(props) => props.theme.details};
      width: 3px;
      max-height: 100%;
      margin-right: 3rem;
      position: relative;
      transition: height 2s ease-in-out;

      &:before{
        content: '';
        display: block;
        border: 10px solid ${(props) => props.theme.text};
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
        top: -11px;
        left: -6px;
      }

      &:after{
        content: '';
        display: block;
        border: 10px solid ${(props) => props.theme.text};
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
        bottom: -11px;
        left: -6px;
      }

      p:first-child{
        color: ${(props) => props.theme.text};
        position: absolute;
        top: -15px;
        right: 13px;
      }

      p:last-child{
        color: ${(props) => props.theme.text};
        position: absolute;
        bottom: -15px;
        right: 13px;
      }
    }
  }
`;

export const Box = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
