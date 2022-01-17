import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    li {
      width: 100%;
      max-width: 200px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 2% 10%;
      border-bottom: 1px solid ${(props) => props.theme.details};

      @media (max-height: 670px) {
        padding: 2% 10%;
      }

      @media (max-height: 575px) {
        padding: 1% 10%;
      }

      @media (max-height: 545px) {
        padding: 0 10%;
      }

      a {
        color: ${(props) => props.theme.text};
        line-height: 2.5rem;
        font-size: 0.8rem;
        letter-spacing: 0.05rem;
        padding: 0 10%;

        :hover {
          color: #fff;
          background-color: ${(props) => props.theme.hoverNav};
          border-radius: 30px;
        }
      }

      img {
        max-width: 100%;
        width: 32px;
        height: 32px;
        margin-right: auto;
        margin-left: auto;
        cursor: pointer;

        &:first-child {
          border: 3px solid ${(props) => props.theme.details};
          border-radius: 50%;
        }
      }
    }
  }
`;
