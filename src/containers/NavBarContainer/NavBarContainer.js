import React from 'react';
import Avatar from '../../components/Avatar/Avatar';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { GlobalContext } from '../../GlobalContext';
import { Container, FlexBox } from './NavBarContainer.styled';

const NavBarContainer = () => {
  const { open } = React.useContext(GlobalContext);

  return (
    <Container open={open}>
      <FlexBox>
        <Avatar />
        <NavBar />
      </FlexBox>
      <Footer />
    </Container>
  );
};

export default NavBarContainer;
