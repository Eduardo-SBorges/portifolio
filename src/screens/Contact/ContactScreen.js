import React from 'react';
import SectionHeaderContainer from '../../containers/SectionHeaderContainer/SectionHeaderContainer';
import { Container, FlexBox } from './ContactScreen.styled';
import ContactSection from '../../containers/ContactSection/ContactSection';
import { animaContainer } from '../../constants/animation';

const ContactScreen = () => {
  return (
    <Container
      variants={animaContainer}
      initial="hidden"
      animate="visible"
      exit={{
        scale: -1,
        opacity: 0,
        transition: { duration: 2 },
      }}
    >
      <SectionHeaderContainer text="Contato" icon="contact" />
      <FlexBox>
        <ContactSection />
      </FlexBox>
    </Container>
  );
};

export default ContactScreen;
