import {
  HomeOutlined,
  PermIdentity,
  BadgeOutlined,
  WorkOutlineOutlined,
  EmailOutlined,
  BookOutlined,
} from '@mui/icons-material';

const sizeLogoSvg = `medium`;

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
