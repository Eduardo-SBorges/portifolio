import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../GlobalContext';
import { Container } from './NavBar.styled';
import { navLinks } from '../../constants/navLinks';

const NavBar = () => {
  const { setOpened } = React.useContext(GlobalContext);

  const handleClick = () => {
    setOpened(false);
  };

  return (
    <Container>
      <ul>
        {navLinks.map((link) => (
          <li key={link.name}>
            {link.svgLogo}
            <Link onClick={handleClick} to={link.src}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default React.memo(NavBar);
