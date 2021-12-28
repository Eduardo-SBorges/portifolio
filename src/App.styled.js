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
    animation: showNavBar 2s;
  }

  @keyframes showNavBar {
    from {
      opacity: 0;
      height: 0;
    }
    ,
    to {
      opacity: 1;
      height: auto;
    }
  }

  main {
    grid-area: Main;
  }
`;
