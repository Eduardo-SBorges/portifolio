import styled from 'styled-components';

export const Btn = styled.button`
  color: ${(props) => props.theme.details};
  border: 2px solid ${(props) => props.theme.details};
  padding: 10px 20px;
  text-transform: uppercase;
  background-color: transparent;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  position: relative;
  line-height: 100%;
  letter-spacing: 1px;
  overflow: hidden;
  border-radius: 5px;

  :disabled {
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${(props) => props.theme.details};
    color: #000;
    border: 2px solid #000;
    transition: all 0.3s ease;
  }
`;
