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
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

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

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDXyObrDZoa_YJMuYHRNbGxvsW6-ArrMg0',
  });

  const position = {
    lat: -31.770020104473012,
    lng: -52.34101294604305,
  };

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
      <Form>
        <BoxHeader>
          <Title size="h3" text="Vamos Conversar" />
        </BoxHeader>
        <BoxInput>
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
        <BoxTextArea>
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
        <BoxButton>
          <Button size="small" text="Enviar Mensagem" />
        </BoxButton>
      </Form>
      <BoxContact>
        <ContactInfo />
      </BoxContact>
      <BoxMap>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={position}
            zoom={3}
          >
            <Marker position={position} />
          </GoogleMap>
        ) : (
          <></>
        )}
      </BoxMap>
      <EmptyBox />
    </Container>
  );
};
export default ContactSection;
