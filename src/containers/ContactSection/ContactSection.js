import React, { useState } from 'react';
import {
  Container,
  Form,
  BoxInput,
  BoxHeader,
  BoxInputLabel,
  BoxTextArea,
  BoxButton,
  BoxContact,
  BoxMap,
  EmptyBox,
} from './ContactSection.styled';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import { animaItems, animaSubItems } from '../../constants/animation';

const ContactSection = () => {
  const [positionTopName, setPositionTopName] = useState('7px');
  const [positionMarginName, setPositionMarginName] = useState('15px');
  const [positionTopEmail, setPositionTopEmail] = useState('7px');
  const [positionMarginEmail, setPositionMarginEmail] = useState('15px');
  const [positionTopTextArea, setPositionTopTextArea] = useState('7px');
  const [positionMarginTextArea, setPositionMarginTextArea] = useState('15px');
  const [fontSizeName, setfontSizeName] = useState('18px');
  const [fontSizeEmail, setfontSizeEmail] = useState('18px');
  const [fontSizeTextArea, setfontSizeTextArea] = useState('18px');

  const handleFocusText = () => {
    setPositionTopTextArea('-25px');
    setPositionMarginTextArea('0px');
    setfontSizeTextArea('14px');
  };
  const handleFocusName = (e) => {
    setPositionTopName('-25px');
    setPositionMarginName('0px');
    setfontSizeName('14px');
  };
  const handleFocusEmail = (e) => {
    setPositionMarginEmail('0px');
    setPositionTopEmail('-25px');
    setfontSizeEmail('14px');
  };
  const handleBlurName = () => {
    setPositionTopName('7px');
    setPositionMarginName('15px');
    setfontSizeName('18px');
  };
  const handleBlurEmail = () => {
    setPositionMarginEmail('15px');
    setPositionTopEmail('7px');
    setfontSizeEmail('18px');
  };

  const handleBlurTextArea = () => {
    setPositionTopTextArea('7px');
    setPositionMarginTextArea('15px');
    setfontSizeTextArea('18px');
  };
  return (
    <Container>
      <Form variants={animaItems}>
        <BoxHeader>
          <Title size="h3" text="Vamos Conversar ?" />
        </BoxHeader>
        <BoxInput variants={animaSubItems}>
          <BoxInputLabel>
            <Input
              onFocus={handleFocusName}
              onBlur={handleBlurName}
              top={positionTopName}
              marginLeft={positionMarginName}
              fontSize={fontSizeName}
              type="text"
              text="Nome"
            />
          </BoxInputLabel>
          <BoxInputLabel>
            <Input
              onFocus={handleFocusEmail}
              onBlur={handleBlurEmail}
              top={positionTopEmail}
              marginLeft={positionMarginEmail}
              fontSize={fontSizeEmail}
              type="email"
              text="Email"
            />
          </BoxInputLabel>
        </BoxInput>
        <BoxTextArea variants={animaSubItems}>
          <Input
            onFocus={handleFocusText}
            onBlur={handleBlurTextArea}
            type="text-area"
            top={positionTopTextArea}
            fontSize={fontSizeTextArea}
            marginLeft={positionMarginTextArea}
            text="Como posso ajudar?"
          />
        </BoxTextArea>
        <BoxButton variants={animaItems}>
          <Button size="small" text="Enviar Mensagem" />
        </BoxButton>
      </Form>
      <BoxContact variants={animaItems}>
        <ContactInfo />
      </BoxContact>
      <BoxMap variants={animaItems}>
        <iframe
          title="Pelotas/RS"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28063363.244209632!2d-65.120503985259!3d-30.83897257397353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95104876f10dfe49%3A0x18cd959725e0398b!2sPelotas%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1641395653162!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ borderRadius: '5px' }}
          loading="lazy"
        ></iframe>
      </BoxMap>
      <EmptyBox />
    </Container>
  );
};
export default ContactSection;
