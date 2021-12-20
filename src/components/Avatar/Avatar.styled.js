import styled from 'styled-components';

export const BoxAvatar = styled.div`
  margin: ${(props) => props.margin};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  width: 200px;

  img {
    width: 100%;
  }

  @media (max-width: 576px), (max-height: 600px) {
    margin: 10px auto 0 auto;
    width: 140px;

    img {
      border-radius: 50%;
    }
  }
`;
export const BoxName = styled.div`
  width: 100%;
  padding: 1%;
  background-color: ${(props) => props.theme.avatarTitle};
  position: ${(props) => props.position};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};

  @media (max-width: 576px), (max-height: 600px) {
    padding: 0;
    font-size: 0.8rem;
  }
`;
