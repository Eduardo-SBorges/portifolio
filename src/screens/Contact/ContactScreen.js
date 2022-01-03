import React from 'react';
import SectionHeaderContainer from '../../containers/SectionHeaderContainer/SectionHeaderContainer';
import { Container, FlexBox } from './ContactScreen.styled';
import ContactSection from '../../containers/ContactSection/ContactSection';


const ContactScreen = () => {
  return (
    <Container>
      <SectionHeaderContainer text="Contato" icon="contact" />
      <FlexBox>
          <ContactSection />
      </FlexBox>
    </Container>
  );
};

export default ContactScreen;
