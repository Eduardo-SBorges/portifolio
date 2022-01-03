import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  font-family: 'Roboto', sans-serif;
  line-height: 1.65;
  position: relative;
`;
export const BoxHeader = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  text-align: center;
  height: 10%;

  h3 {
    border-color: #00a3e1 !important;
    display: inline-block;
    font-size: 22px;
    font-weight: 600;
    line-height: 1em;
    letter-spacing: 0.5px;
    position: relative;
    text-transform: uppercase;
    padding: 5px 10px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  }

  h3::before {
    position: absolute;
    left: 0px;
    content: '';
    width: 2px;
    height: 5px;
    background-color: #00a3e1;
    bottom: 0;
  }
  h3::after {
    position: absolute;
    content: '';
    right: 0px;
    width: 2px;
    height: 5px;
    background-color: #00a3e1;
    bottom: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;

  label {
    font-size: ${(props) => props.fontSize};
  }

  > div {
    align-self: start;
    width: 100%;
  }
`;
export const BoxInput = styled.div`
  display: flex;
  justify-content: center;
  gap: 2%;
  margin-bottom: 50px;
  margin-top: 5%;
  width: 100%;
  position: relative;

  input {
    height: 40px;
    border-radius: 5px;
  }
  label {
    position: absolute;
    top: ${(props) => props.top}; //7px;
    font-size: ${(props) => props.fontSize};
  }
`;

export const BoxInputLabel = styled.div`
  width: 100%;
  label {
    margin-bottom: 5px;
  }
`;

export const BoxTextArea = styled.div`
  position: relative;

  input {
    height: 150px;
    border-radius: 5px;
  }

  label {
    position: absolute;
    top: ${(props) => props.top}; //7px;
    margin-left: ${(props) => props.marginLeft}; //15px
    font-size: ${(props) => props.fontSize};
  }
`;

export const BoxButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  button {
    height: 100%;
    margin: 5% 0;
    text-align: center;
  }
`;

export const BoxContact = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const BoxMap = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  overflow: hidden;
  position: absolute;
  left: 0;
  z-index: 1;
`;

export const EmptyBox = styled.div`
  height: 1px;
  width: 1px;
  margin-bottom: 25%;
`;
