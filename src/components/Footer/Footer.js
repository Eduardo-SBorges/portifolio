import React from 'react';
import { logoSocial, personalData } from '../../constants/data';
import { time } from '../../constants/time';
import { Container, BoxSocial } from './Footer.styled';
import Paragraph from '../Paragraph/Paragraph.js';

const Footer = () => {
  return (
    <Container>
      <BoxSocial>
        {logoSocial.map((social) => (
          <a
            href={social.url}
            key={social.name}
            target="_blank"
            rel="noreferrer"
          >
            {social.svgRede}
          </a>
        ))}
      </BoxSocial>
      <Paragraph text={`${time.year} @ ${personalData.name}.`} />
      <Paragraph text="All rights reserved." />
    </Container>
  );
};

export default React.memo(Footer);
