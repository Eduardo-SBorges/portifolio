import React from 'react';
import Title from '../Title/Title';
import { Container, UL } from './ContactInfo.styled';
import { contactInformation } from '../../constants/data';
import Paragraph from '../Paragraph/Paragraph';
import { motion } from 'framer-motion';
import { animaItems } from '../../constants/animation';

const ContactInfo = () => {
  return (
    <Container initial="hidden" animate="visible" variants={animaItems}>
      <motion.div initial="hidden" animate="visible" variants={animaItems}>
        <UL variants={animaItems}>
          {contactInformation.map((info, index) => (
            <motion.li key={index} variants={animaItems}>
              {info.icon}
              <Title size="h5" text={info.name} />
              <Paragraph text={info.description} />
            </motion.li>
          ))}
        </UL>
      </motion.div>
    </Container>
  );
};

export default ContactInfo;
