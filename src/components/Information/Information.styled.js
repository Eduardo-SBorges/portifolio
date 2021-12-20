import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 66.6%;
    padding-right: 15px;
    padding-left:15px;

    h3{
        font-size:22px;
        font-weight:700;
        margin-bottom:20px;
        color: ${props => props.theme.text};
        line-height: 1.2;
    }
    line-height: 1.65;
    margin-bottom:1rem;
    font-size:16px;
    color: ${props => props.theme.text};
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
`
export const UL = styled.ul`
list-style: none;
text-decoration: none;
margin-bottom: 1rem;`

export const LI = styled.li`
line-height: 1em;
margin-bottom: 15px;
`

export const SPAN = styled.span`
font-family: "Playfair Display", serif;
font-size: 16px;
font-weight: 700;
letter-spacing: .5px;
border-bottom: 2px solid #ffffff;
    border-bottom-color: rgb(255, 255, 255);
position: relative;
display: inline-block;
margin-right: 15px;
padding-bottom: 1px;
color: #ffffff;
border-color: #00A3E1 !important;
`