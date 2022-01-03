import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  line-height: 1.65;
  flex-direction: column;
`
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
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;

  label {
    font-size: ${(props) => props.fontSize};
  }
`
export const BoxInput = styled.div`
  display: flex;
  margin-bottom: 50px;
  margin-top: 5%;
  width: 100%;
  position: relative;
  input {
    height: 40px;
  }
  label {
    position: absolute;
    top: ${(props) => props.top}; //7px;
    margin-left: ${(props) => props.marginLeft}; //15p
    font-size: ${(props) => props.fontSize};
  }
`

export const BoxInputLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 15px;
  margin-right: 15px;

  label {
    margin-bottom: 5px;
  }
`

export const BoxTextArea = styled.div`
  width: 96.2%;
  margin-left: 15px;
  margin-right: 15px;
  position: relative;
  input {
    height: 163px;
  }

  label {
    position: absolute;
    top: ${(props) => props.top}; //7px;
    margin-left: ${(props) => props.marginLeft}; //15p
    font-size: ${(props) => props.fontSize};
  }
`

export const BoxButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;

  button {
    height: 100%;
    margin-top: 8%;
    text-align: center;
    width: 26.5%;
  }
`
export const BoxContact = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
margin-top: 11%;`
