import styled from 'styled-components';

export const Screens = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  z-index: 1;
  grid-template:
    'NavBarContainer Main'
    'NavBarContainer Main'
    / 200px 1fr;

  @media (max-width: 788px) {
    grid-template:
      'Header Header'
      'Main Main'
      / 200px 1fr;

    header {
      grid-area: Header;
      opacity: 1;
    }
  }

  nav {
    grid-area: NavBarContainer;
    animation: showNavBar 3s;

    @media (max-width: 788px) {
      background-color: black;
      border-right: 1px solid ${(props) => props.theme.details};
    }
  }

  @keyframes showNavBar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 100%;
    }
  }

  main {
    grid-area: Main;
  }
`;
