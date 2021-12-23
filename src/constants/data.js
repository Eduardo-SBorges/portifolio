import {
  Facebook,
  Instagram,
  LinkedIn,
  GitHub,
  Twitter,
} from '@mui/icons-material';
import {
  ComputerOutlined,
  RemoveRedEyeOutlined,
  DevicesOutlined,
} from '@mui/icons-material';

import imgAvatar from '../assets/img/avatar.jpg';
import deploy1 from '../assets/img/deploy1.jpg';
import deploy2 from '../assets/img/deploy2.jpg';

// Personal Data

export const personalData = {
  name: 'Arthur Ropke',
  imgProfileSrc: imgAvatar,
  profission: 'Web Developer',
  aboutMeTitle: 'Sobre mim',
  aboutMeText:
    'Sou muito dedicado em evoluir meus conhecimentos na área, além de me testar constantemente com desafios, estou procurando oportunidades para começar minha carreira e desenvolver minhas habilidades na prática.Apaixonado por filosofia,tecnologia e inovação.',
};

// Social Media

const sizeLogoSvg = `medium`;
const sizeLogo = `large`;

export const expert = [
  {
    title: 'Desenvolvimento Web',
    icon: <ComputerOutlined fontSize={sizeLogo} />,
    description:
      'Desenvolvimento web desde o início, como um hobby, até hoje, como um profissional. Atualmente trabalho como desenvolvedor front-end, com foco em ReactJS.',
  },
  {
    title: 'Responsividade',
    icon: <DevicesOutlined fontSize={sizeLogo} />,
    description:
      'Desenvolvimento web desde o início, como um hobby, até hoje, como um profissional. Atualmente trabalho como desenvolvedor front-end, com foco em ReactJS.',
  },
  {
    title: 'Web Design',
    icon: <RemoveRedEyeOutlined fontSize={sizeLogo} />,
    description:
      'Desenvolvimento web desde o início, como um hobby, até hoje, como um profissional. Atualmente trabalho como desenvolvedor front-end, com foco em ReactJS.',
  },
];

export const logoSocial = [
  {
    name: 'FACEBOOK',
    svgRede: <Facebook fontSize={sizeLogoSvg} />,
    url: 'https://www.facebook.com/',
  },
  {
    name: 'INSTAGRAN',
    svgRede: <Instagram fontSize={sizeLogoSvg} />,
    url: 'https://www.instagram.com/',
  },
  {
    name: 'LINKEDIN',
    svgRede: <LinkedIn fontSize={sizeLogoSvg} />,
    url: 'https://www.linkedin.com/',
  },
  {
    name: 'GITHUB',
    svgRede: <GitHub fontSize={sizeLogoSvg} />,
    url: 'https://www.github.com/',
  },
  {
    name: 'TWITTER',
    svgRede: <Twitter fontSize={sizeLogoSvg} />,
    url: 'https://www.twitter.com/',
  },
];

// Screen Resume

export const personalResume = [
  {
    id: 1,
    subTitle: 'LEAD UI DESIGNER',
    company: 'BIG DESIGN COMPANY, NY, USA',
    dateStart: '2016',
    dateEnd: '2018',
    description:
      'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima',
  },
  {
    id: 2,
    subTitle: 'LEAD UI DESIGNER',
    company: 'BIG DESIGN COMPANY, NY, USA',
    dateStart: '2016',
    dateEnd: '2018',
    description:
      'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima',
  },
  {
    id: 3,
    subTitle: 'LEAD UI DESIGNER',
    company: 'BIG DESIGN COMPANY, NY, USA',
    dateStart: '2016',
    dateEnd: '2018',
    description:
      'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima',
  },
];

export const personalEducation = [
  {
    id: 4,
    subTitle: 'LEAD UI DESIGNER',
    school: 'BIG DESIGN COMPANY, NY, USA',
    dateStart: '2015',
    dateEnd: '2020',
    description:
      'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima',
  },
  {
    id: 5,
    subTitle: 'LEAD UI DESIGNER',
    school: 'BIG DESIGN COMPANY, NY, USA',
    dateStart: '2015',
    dateEnd: '2020',
    description:
      'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima',
  },
  {
    id: 6,
    subTitle: 'LEAD UI DESIGNER',
    school: 'BIG DESIGN COMPANY, NY, USA',
    dateStart: '2015',
    dateEnd: '2020',
    description:
      'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima',
  },
];

// Screen About Me

export const personalInformation = {
  title: 'Informações Pessoais',
  name: 'Lineu Lima',
  age: '25',
  residence: 'Pelotas, RS, Brasil',
  email: 'lineulima1@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lineulima1/',
  github: 'https://github.com/lineulima1',
};

// Screen Skills

export const personalSkills = [
  {
    id: 7,
    subTitle: 'Front-End',
    skills: ['HTML', 'CSS', 'Javascript', 'React'],
  },
  {
    id: 8,
    subTitle: 'DevOps',
    skills: ['Git', 'GitFlow'],
  },
  {
    id: 9,
    subTitle: 'UI/UX',
    skills: ['Adobe XD', 'Figma', 'Photoshop'],
  },
  {
    id: 10,
    subTitle: 'Gestão',
    skills: ['Agile', 'Scrum', 'Kanban', 'Coaching'],
  },
];

export const personalProjects = [
  {
    id: 11,
    subTitle: 'Youtube Clone',
    description: 'Clone do Youtube usando React.js',
    technologies: ['React.js', 'Redux', 'Firebase'],
    urlRepository:
      'https://github.com/Eduardo-SBorges/React_Clone_Youtube_Interface',
    urlProject:
      'https://eduardo-sborges.github.io/React_Clone_Youtube_Interface/',
    img: deploy1,
  },
  {
    id: 12,
    subTitle: 'WildBeast',
    description: 'Website usando CSS Grid Layout',
    technologies: ['HTML', 'CSS', 'Javascript'],
    urlRepository: 'https://github.com/Eduardo-SBorges/WebPage_CSS_Grid_Layout',
    urlProject: 'https://eduardo-sborges.github.io/WebPage_CSS_Grid_Layout/',
    img: deploy2,
  },
  {
    id: 13,
    subTitle: 'Youtube Clone',
    description: 'Clone do Youtube usando React.js',
    technologies: ['React.js', 'Redux', 'Firebase'],
    urlRepository:
      'https://github.com/Eduardo-SBorges/React_Clone_Youtube_Interface',
    urlProject:
      'https://eduardo-sborges.github.io/React_Clone_Youtube_Interface/',
    img: deploy1,
  },
  {
    id: 14,
    subTitle: 'WildBeast',
    description: 'Website usando CSS Grid Layout',
    technologies: ['HTML', 'CSS', 'Javascript'],
    urlRepository: 'https://github.com/Eduardo-SBorges/WebPage_CSS_Grid_Layout',
    urlProject: 'https://eduardo-sborges.github.io/WebPage_CSS_Grid_Layout/',
    img: deploy2,
  },
];
