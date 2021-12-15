import styled from 'styled-components'

export const ContainerHeader = styled.div`
display: flex;	
justify-content: space-between;
align-items: center;
width: 100%;
color: ${props => props.theme.text};
border-bottom: 1px dashed ${props => props.theme.border};
padding-bottom: 10px;
h2 {
    font-size:36px;
}
svg {
    font-size:56px;
}
`
