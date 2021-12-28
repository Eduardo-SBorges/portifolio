import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../GlobalContext';
import { Container } from './NavBar.styled';
import { navLinks } from '../../constants/navLinks';
import brazilflag from '../../assets/img/brazil-icon.png';
import euaflag from '../../assets/img/usa-icon.png';
import spanishflag from '../../assets/img/espanhol-icon.png';

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
        <li>
          <img src={brazilflag} alt="Brazil" />
          <img src={euaflag} alt="Brazil" />
          <img src={spanishflag} alt="Brazil" />
        </li>
      </ul>
    </Container>
  );
};

export default React.memo(NavBar);
