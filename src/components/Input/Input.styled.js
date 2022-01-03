import styled from 'styled-components';

export const INPUT = styled.input`
width: 100%;
border: 2px solid #999;
padding: 5px 10px;
background-color: transparent;
color: #ffffff;
` 
export const LABEL = styled.label`
font-weight: 500;
font-size: ${(props) => props.fontSize};
top: ${(props) => props.top};//7px;
margin-left:${(props) => props.marginLeft}; //15px

`