import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Title from '../../components/Title/Title';
import { personalData } from '../../constants/data';
import {
  Container,
  BackgroundImage,
  BoxTitle,
  BoxTyping,
} from './HomeScreen.styled';
import {
  animaHome,
  animaDelayI,
  animaDelayII,
} from '../../constants/animation';
import homeBg from '../../assets/img/home-bg.jpg';

const HomeScreen = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [personalData.profission],
      startDelay: 300,
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 3000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container
      variants={animaHome}
      initial="hidden"
      animate="visible"
      exit={{
        position: 'static',
        rotate: 360,
        scale: 10,
        transition: { duration: 5 },
      }}
    >
      <BackgroundImage
        animate={{
          scale: [1, 2, 1],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 50,
          type: 'spring',
          stiffness: 200,
          damping: 20,
          repeat: Infinity,
        }}
      >
        <img src={homeBg} alt="Home" />
      </BackgroundImage>
      <BoxTitle
        variants={animaDelayI}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <Title size="h1" text={personalData.name} />
        <BoxTyping variants={animaDelayII}>
          I am an <span ref={el}></span>
        </BoxTyping>
      </BoxTitle>
    </Container>
  );
};

export default HomeScreen;
