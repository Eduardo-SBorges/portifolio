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
    name: 'HOME',
    src: '/',
    svgLogo: <HomeOutlined fontSize={sizeLogoSvg} />,
  },
  {
    name: 'ABOUT',
    src: '/about',
    svgLogo: <PermIdentity fontSize={sizeLogoSvg} />,
  },
  {
    name: 'EXPERIENCE',
    src: '/experience',
    svgLogo: <BadgeOutlined fontSize={sizeLogoSvg} />,
  },
  {
    name: 'SKILLS',
    src: '/skills',
    svgLogo: <BookOutlined fontSize={sizeLogoSvg} />,
  },
  {
    name: 'PORTFOLIO',
    src: '/portfolio',
    svgLogo: <WorkOutlineOutlined fontSize={sizeLogoSvg} />,
  },
  {
    name: 'CONTACT',
    src: '/contact',
    svgLogo: <EmailOutlined fontSize={sizeLogoSvg} />,
  },
];
