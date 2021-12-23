import {
  HomeOutlined,
  PermIdentity,
  BadgeOutlined,
  WorkOutlineOutlined,
  EmailOutlined,
  BookOutlined,
} from '@mui/icons-material';

//Dados deverão estar em uma array de objetos e serem chamados usando o comando .map( ) retornando uma lista (<ul> ... <ul>).

const sizeLogoSvg = `large`;

export const navLinks = [
  {
    name: 'INICIO',
    src: '/',
    svgLogo: <HomeOutlined fontSize={sizeLogoSvg} />,
  },
  {
    name: 'SOBRE',
    src: '/sobre',
    svgLogo: <PermIdentity fontSize={sizeLogoSvg} />,
  },
  {
    name: 'EXPERIÊNCIA',
    src: '/experiencia',
    svgLogo: <BadgeOutlined fontSize={sizeLogoSvg} />,
  },
  {
    name: 'HABILIDADES',
    src: '/habilidades',
    svgLogo: <BookOutlined fontSize={sizeLogoSvg} />,
  },
  {
    name: 'PORTFÓLIO',
    src: '/portfolio',
    svgLogo: <WorkOutlineOutlined fontSize={sizeLogoSvg} />,
  },
  {
    name: 'CONTATO',
    src: '/contato',
    svgLogo: <EmailOutlined fontSize={sizeLogoSvg} />,
  },
];
