import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Title from '../../components/Title/Title';
import { personalData } from '../../constants/data';
import { Container } from './HomeScreen.styled';

const HomeScreen = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [personalData.profission],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container>
      <Title size="h1" text={personalData.name} />
      <p>
        I am <span ref={el}></span>
      </p>
    </Container>
  );
};

export default HomeScreen;
