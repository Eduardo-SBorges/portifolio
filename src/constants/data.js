import {
	Facebook,
	Instagram,
	LinkedIn,
	GitHub,
	Twitter
} from '@mui/icons-material'
import { ListItemAvatar } from '@mui/material'

import imgAvatar from '../assets/img/avatar.jpg'

// Personal Data

export const personalData = {
	name: 'Arthur Ropke',
	imgProfileSrc: imgAvatar,
	profission: 'Web Developer',
	aboutMeTitle:'Sobre mim',
	aboutMeText:'Sou muito dedicado em evoluir meus conhecimentos na área, além de me testar constantemente com desafios , estou procurando oportunidades para começar minha carreira e desenvolver minhas habilidades na prática.Apaixonado por filosofia,tecnologia e inovação.' ,

}

// Social Media

const sizeLogoSvg = `medium`

export const logoSocial = [
	{
		name: 'FACEBOOK',
		svgRede: <Facebook fontSize={sizeLogoSvg} />,
		url: 'https://www.facebook.com/'
	},
	{
		name: 'INSTAGRAN',
		svgRede: <Instagram fontSize={sizeLogoSvg} />,
		url: 'https://www.instagram.com/'
	},
	{
		name: 'LINKEDIN',
		svgRede: <LinkedIn fontSize={sizeLogoSvg} />,
		url: 'https://www.linkedin.com/'
	},
	{
		name: 'GITHUB',
		svgRede: <GitHub fontSize={sizeLogoSvg} />,
		url: 'https://www.github.com/'
	},
	{
		name: 'TWITTER',
		svgRede: <Twitter fontSize={sizeLogoSvg} />,
		url: 'https://www.twitter.com/'
	}
]

// Screen Resume

export const personalResume = [
	{
		id: 1,
		subTitle: 'LEAD UI DESIGNER',
		company: 'BIG DESIGN COMPANY, NY, USA',
		dateStart: '2016',
		dateEnd: '2018',
		description:
			'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima'
	},
	{
		id: 2,
		subTitle: 'LEAD UI DESIGNER',
		company: 'BIG DESIGN COMPANY, NY, USA',
		dateStart: '2016',
		dateEnd: '2018',
		description:
			'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima'
	},
	{
		id: 3,
		subTitle: 'LEAD UI DESIGNER',
		company: 'BIG DESIGN COMPANY, NY, USA',
		dateStart: '2016',
		dateEnd: '2018',
		description:
			'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima'
	}
]

// Screen EDUCATION

export const personalEducation = [
	{
		id: 4,
		subTitle: 'LEAD UI DESIGNER',
		school: 'BIG DESIGN COMPANY, NY, USA',
		dateStart: '2015',
		dateEnd: '2020',
		description:
			'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima'
	},
	{
		id: 5,
		subTitle: 'LEAD UI DESIGNER',
		school: 'BIG DESIGN COMPANY, NY, USA',
		dateStart: '2015',
		dateEnd: '2020',
		description:
			'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima'
	},
	{
		id: 6,
		subTitle: 'LEAD UI DESIGNER',
		school: 'BIG DESIGN COMPANY, NY, USA',
		dateStart: '2015',
		dateEnd: '2020',
		description:
			'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima'
	}
]

export const personalInformation = {
	title: 'Informações Pessoais',
	name: 'Lineu Lima',
	age: '25',
	residence: 'Pelotas, RS, Brasil',
	email: 'lineulima1@gmail.com',
	linkedin: 'https://www.linkedin.com/in/lineulima1/',
	github: 'https://github.com/lineulima1'
}