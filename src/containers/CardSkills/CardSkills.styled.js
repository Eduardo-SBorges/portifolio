import Styled from 'styled-components';

export const Container = Styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-left: 10%;
  gap: 5rem;
  position: relative;
  z-index: -1;
  
  h3 {
    font-size: 48px;
    padding: 0 10px;
    margin-bottom: 5%;
    position: relative;
    border-bottom: 1px solid #00A3E1;

    &::before {
      position: absolute;
      content: "";
      width: 2px;
      height: 5px;
      left: 0;
      background-color: #00A3E1;
      bottom: 0;
    }

    &::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 5px;
    right: 0;
    background-color: #00A3E1;
    bottom: 0;
    }
  }

  h4 {
    font-size: 20px;
  }
`;

export const List = Styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  height: 100%;

  li{
    display: flex;
    justify-content: flex-start;
    width: 40%;
    margin-bottom: 10%;
    margin-left: 10%;
  }

  @media (max-width: 1330px) {
    li {
      width: 50%;
      margin-left: 0;
    }
  }

  @media (max-width: 1050px) {
    li {
      width: 100%;
      margin-left: 15%;
    }
  }

  @media (max-width: 650px) {
    h3 {
      font-size: 36px;
    }

    h4 {
      font-size: 18px;
    }
  }
`;

export const Box = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
      
  h4::before {
    content: '- ';
  }
`;
