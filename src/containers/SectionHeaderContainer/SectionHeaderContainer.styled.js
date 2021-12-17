import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 5%;
  color: ${(props) => props.theme.text};
  border-bottom: 1px dashed ${(props) => props.theme.border};
  padding-bottom: 10px;

  @media (max-width: 788px) {
    margin-top: 15%;
  }

  @media (max-width: 576px) {
    margin-top: 25%;
  }

  h2 {
    font-size: 36px;
  }
  svg {
    font-size: 56px;
  }
`;
