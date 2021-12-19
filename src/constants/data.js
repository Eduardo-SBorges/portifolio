import {
  Facebook,
  Instagram,
  LinkedIn,
  GitHub,
  Twitter,
} from '@mui/icons-material';

import imgAvatar from '../assets/img/avatar.jpg';

// Personal Data

export const personalData = {
  name: 'Arthur Ropke',
  imgProfileSrc: imgAvatar,
  profission: 'Web Developer',
};

// Social Media

const sizeLogoSvg = `medium`;

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

// Screen EDUCATION

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
