import { Instagram, LinkedIn, GitHub } from '@mui/icons-material';
import {
  ComputerOutlined,
  RemoveRedEyeOutlined,
  DevicesOutlined,
  WhatsappOutlined,
  SendOutlined,
} from '@mui/icons-material';

import imgAvatar from '../assets/img/avatar.jpg';
import deploy1 from '../assets/img/deploy1.jpg';
import deploy2 from '../assets/img/deploy2.jpg';
import deploy3 from '../assets/img/deploy3.jpg';
import deploy4 from '../assets/img/deploy4.jpg';
import deploy5 from '../assets/img/deploy5.jpg';
import deploy6 from '../assets/img/deploy6.jpg';
import deploy7 from '../assets/img/deploy7.jpg';
import deploy8 from '../assets/img/deploy8.jpg';
import deploy9 from '../assets/img/deploy9.jpg';
import deploy10 from '../assets/img/deploy10.jpg';
import deploy11 from '../assets/img/deploy11.jpg';

// Personal Data

export const personalData = {
  name: 'Eduardo Borges',
  imgProfileSrc: imgAvatar,
  profission: 'AEM Solution Specialist!',
  aboutMeTitle: 'About me',
  aboutMeTextOne:
    "Hi, I'm Eduardo and I'm 24 years old. I am an AEM Solution Specialist and I work on projects with Compass.uol. I define myself as curious, creative and disciplined and my greatest skill is learning what technology has the best to offer us in a fast and agile way.",
  aboutMeTextTwo:
    "My roots are the frontend (React, Vue and Angular), however, I am actively involved with the backend, devops and cloud. In addition, I have a degree in Management with a focus on coaching, leadership and behavioral analysis, skills that drive me as a Tech Lead."
};

// Social Media

const sizeLogoSvg = `medium`;
const sizeLogo = `large`;

export const expert = [
  {
    title: 'Web Development',
    icon: <ComputerOutlined fontSize={sizeLogo} />,
    description:
      'Frontend development with JavaScript Vanilla, React, Vue and Angular with expertise in AEM.',
  },
  {
    title: 'Responsive and Optimized Layouts',
    icon: <DevicesOutlined fontSize={sizeLogo} />,
    description:
      'Development with a focus on the best usability and user experience that uses the application.',
  },
  {
    title: 'Tech Lead',
    icon: <RemoveRedEyeOutlined fontSize={sizeLogo} />,
    description:
      'I have a degree in Management with a focus on coaching, leadership and behavioral analysis, skills that drive me as a Tech Lead.',
  },
];

export const logoSocial = [
  {
    name: 'INSTAGRAN',
    svgRede: <Instagram fontSize={sizeLogoSvg} />,
    url: 'https://www.instagram.com/eduardo_sborges/',
  },
  {
    name: 'LINKEDIN',
    svgRede: <LinkedIn fontSize={sizeLogoSvg} />,
    url: 'https://www.linkedin.com/in/eduardoxxborges/',
  },
  {
    name: 'GITHUB',
    svgRede: <GitHub fontSize={sizeLogoSvg} />,
    url: 'https://github.com/Eduardo-SBorges',
  },
];

// Screen Resume

export const personalResume = [
  {
    id: 'resume1',
    subTitle: 'Desenvolvedor AEM Front-end - Trainee',
    company: 'Compass.UOL',
    dateStart: '2022',
    dateEnd: 'Hoje',
    description:
      'Trabalhando com AEM Front-end utilizando React.js e Vue.js. Participando como instrutor de Vue.js no Programa de Bolsas da empresa.',
  },
  {
    id: 'resume2',
    subTitle: 'Programa de Bolsas Front-End React.js - Estágio',
    company: 'Compass.UOL',
    dateStart: '2021',
    dateEnd: '2021',
    description:
      'Trabalhando com o desenvolvimento de interfaces utilizando React.js, SPAs com gerenciamento de rotas e componentes estilizados. Testes unitários e end-to-end utilizando Cypress.js. Consumo de APIs e desenvolvimento em Squads, aplicando os métodos ágeis: Kanban e Scrum.',
  },
  {
    id: 'resume3',
    subTitle: 'Consultor de Negócios - Pleno',
    company: 'Aquarela Tintas LTDA',
    dateStart: '2020',
    dateEnd: '2021',
    description:
      'Atuei indentificando tendências e necessidades do público alvo nos negócios da empresa e criando estratégias e ações para propor melhorias nos processos de vendas.',
  },
  {
    id: 'resume4',
    subTitle: 'Trainee',
    company: 'Santander Brasil S/A',
    dateStart: '2018',
    dateEnd: '2019',
    description:
      'Atuei vendendo bens e serviços, assim como desenvolvendo relacionamento com clientes. Planejamento de atividades, negociações e comunicação com clientes faziam parte do dia a dia na agência bancária. Atuei de forma versátil tanto no operacional (caixa, contabilidade, financeiro, etc) quanto no comercial (vendas, resultados, etc).',
  },
  {
    id: 'resume5',
    subTitle: 'NPOR/CPOR - Temporário',
    company: 'Exército Brasileiro',
    dateStart: '2017',
    dateEnd: '2017',
    description:
      'Participei do NPOR - Núcleo de Formação de Oficiais da Reserva-, um órgão militar dedicado à formação de aspirantes a oficiais, habilitando-os a exercer funções de comando para as frações elementares da tropa, como seções, pelotões e companhias. As atividades realizadas durante o curso tiveram como objetivo principal a prática dos conhecimentos militares do país.',
  },
];

export const personalEducation = [
  {
    id: 'education1',
    subTitle: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    school: 'Faculdade Senac Pelotas',
    dateStart: '2021',
    dateEnd: '2024',
    description:
      'Curso Superior em tecnologias da informação, com ênfase na criação e análises práticas de sistemas web e mobile, abordando as mais novas tecnologias usadas no mercado como JS, Node, MySQL, React/React Native e Testes Unitários.',
  },
  {
    id: 'education2',
    subTitle: 'Especialização em Coaching e Análise Comportamental',
    school: 'Sociedade Brasileira de Coaching',
    dateStart: '2019',
    dateEnd: '2020',
    description:
      'Formação que aborda um mix de recursos que utiliza técnicas, ferramentas e conhecimentos de diversas ciências como administração, gestão de pessoas, psicologia, neurociência, recursos humanos, planejamento estratégico, entre outros.',
  },
  {
    id: 'education3',
    subTitle: 'Graduação em Administração de Empresas',
    school: 'Faculdade Anhanguera Pelotas',
    dateStart: '2015',
    dateEnd: '2020',
    description:
      'Bacharel que aborda as principais áreas de administração de empresas, como gestão de pessoas, gestão de recursos humanos, gestão de projetos, gestão de tecnologia da informação, entre outros.',
  },
];

// Screen About Me

export const personalInformation = {
  title: 'Personal Informations',
  name: 'Eduardo Borges',
  age: '24',
  languages: 'Portuguese | English',
  state: 'Married',
  residence: 'Pelotas, RS, Brazil',
  email: 'eduardo.borges@compasso.com.br',
  linkedin: 'https://www.linkedin.com/in/eduardoxxborges/',
  github: 'https://github.com/Eduardo-SBorges',
};

// Screen Skills

export const personalSkills = [
  {
    id: 'skills1',
    subTitle: 'Front-End',
    skills: [
      'HTL',
      'XML',
      'HTML',
      'VueJS',
      'ReactJS',
      'Wordpress',
      'Javascript',
      'CSS / SASS / LESS',
    ],
  },
  {
    id: 'skills2',
    subTitle: 'FrameWorks',
    skills: [
      'Babel',
      'Axios',
      'Webpack',
      'Bootstrap',
      'Typescript',
      'Materialize',
      'Material-UI',
      'Styled-Components',
    ],
  },
  {
    id: 'skills3',
    subTitle: 'Gestão',
    skills: ['Agile', 'Scrum', 'Kanban', 'Coaching', 'Análise Comportamental'],
  },
  {
    id: 'skills4',
    subTitle: 'DevOps',
    skills: ['Git', 'HTTP', 'GitFlow'],
  },
  {
    id: 'skills5',
    subTitle: 'UI/UX',
    skills: ['Figma', 'Adobe XD', 'Adobe AEM', 'Adobe Photoshop'],
  },
  {
    id: 'skills6',
    subTitle: 'Testes e QA',
    skills: ['Jest', 'Cypress', 'React Testing Library'],
  },
];

// Contact Information

export const contactInformation = [
  {
    name: 'E-mail',
    description: 'eduardo.borges@compasso.com.br',
    icon: <SendOutlined fontSize={sizeLogo} />,
  },
  {
    name: 'Whatsapp',
    description: '+55 53 9 9138-6031',
    icon: <WhatsappOutlined fontSize={sizeLogo} />,
  },
];

export const personalProjects = [
  {
    id: 'projects1',
    subTitle: 'Logon Compasso UOL',
    description: 'Website de login para o sistema Compasso UOL',
    technologies: [
      'React.js',
      'Axios',
      'React Testing Library',
      'Jest',
      'StoryBook',
    ],
    urlRepository: 'https://github.com/Eduardo-SBorges/React-Login-Project',
    urlProject: 'https://eduardo-sborges.github.io/React-Login-Project/',
    img: deploy1,
  },
  {
    id: 'projects2',
    subTitle: 'React Form Project',
    description: 'Aplicação Web com o manuseio de formulários usando React.js',
    technologies: ['React.js'],
    urlRepository: 'https://github.com/Eduardo-SBorges/React_Form_Project',
    urlProject: 'https://eduardo-sborges.github.io/React_Form_Project/',
    img: deploy2,
  },
  {
    id: 'projects3',
    subTitle: 'Youtube Clone',
    description: 'Clone do Youtube usando React.js e Material Ui',
    technologies: ['React.js', 'Material UI'],
    urlRepository:
      'https://github.com/Eduardo-SBorges/React_Clone_Youtube_Interface',
    urlProject:
      'https://eduardo-sborges.github.io/React_Clone_Youtube_Interface/',
    img: deploy3,
  },
  {
    id: 'projects4',
    subTitle: 'WordPress e CMS',
    description: 'Website com WordPress e CMS',
    technologies: ['React.js', 'Material UI'],
    urlRepository: 'https://github.com/Eduardo-SBorges/WordPress-e-CMS',
    urlProject: '',
    img: deploy4,
  },
  {
    id: 'projects5',
    subTitle: 'Animais Fantásticos',
    description: 'SPA com Javascript Puro',
    technologies: ['HTML', 'CSS', 'JS'],
    urlRepository:
      'https://github.com/Eduardo-SBorges/FinalProject_JS_Advanced',
    urlProject: 'https://eduardo-sborges.github.io/FinalProject_JS_Advanced/',
    img: deploy5,
  },
  {
    id: 'projects6',
    subTitle: 'Caravan',
    description: 'Website com Bootstrap 5',
    technologies: ['Bootstrap 5', 'HTML', 'CSS', 'SASS', 'JS'],
    urlRepository: 'https://github.com/Eduardo-SBorges/WebPage_Bootstrap',
    urlProject: 'https://eduardo-sborges.github.io/WebPage_Bootstrap/',
    img: deploy6,
  },
  {
    id: 'projects7',
    subTitle: 'WildBeast',
    description: 'Website usando CSS Grid Layout',
    technologies: ['HTML', 'CSS', 'JS'],
    urlRepository: 'https://github.com/Eduardo-SBorges/WebPage_CSS_Grid_Layout',
    urlProject: 'https://eduardo-sborges.github.io/WebPage_CSS_Grid_Layout/',
    img: deploy7,
  },
  {
    id: 'projects8',
    subTitle: 'Le Scone',
    description: 'SPA usando SASS/SCSS',
    technologies: ['HTML', 'CSS', 'SASS'],
    urlRepository: 'https://github.com/Eduardo-SBorges/WebPage_CSS_SASS',
    urlProject: 'https://eduardo-sborges.github.io/WebPage_CSS_SASS/',
    img: deploy8,
  },
  {
    id: 'projects9',
    subTitle: 'FlexBlog',
    description: 'SPA com CSS Flex-Box',
    technologies: ['HTML', 'CSS', 'CSS Flex-Box'],
    urlRepository: 'https://github.com/Eduardo-SBorges/WebPage_CSS_Flex_Box',
    urlProject: 'https://eduardo-sborges.github.io/WebPage_CSS_Flex_Box/',
    img: deploy9,
  },
  {
    id: 'projects10',
    subTitle: 'Sistema de Estoque de Loja de Instrumentos Musicais',
    description: 'Recebe, manipula e salva dados com JS',
    technologies: ['JS', 'Node.js'],
    urlRepository:
      'https://github.com/Eduardo-SBorges/Instrumentos_Musicais_JS',
    urlProject: '',
    img: deploy10,
  },
  {
    id: 'projects11',
    subTitle: 'Diversity Bank',
    description: 'Um app bancário com UX/UI design',
    technologies: ['AdobeXD, Figma'],
    urlRepository:
      'https://github.com/Eduardo-SBorges/Prototipo_App_Diversity_Bank',
    urlProject:
      'https://xd.adobe.com/view/84f94272-64ad-4d62-a669-6dd0bc68b7ff-d1aa/',
    img: deploy11,
  },
];
