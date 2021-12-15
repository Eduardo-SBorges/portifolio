import {
	Facebook,
	Instagram,
	LinkedIn,
	GitHub,
	Twitter
} from '@mui/icons-material'

import imgAvatar from '../assets/img/avatar.jpg'

// Personal Data

export const personalData = {
	name: 'Arthur Ropke',
	imgProfileSrc: imgAvatar,
	profission: 'Web Developer'
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
		title: 'EXPERIENCE'
	},
	{
		experience: [
			{
				subTitle: 'LEAD UI DESIGNER',
				company: 'BIG DESIGN COMPANY, NY, USA',
				date: '2018 - 2016',
				description:
					'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima'
			},
			{
				title: 'LEAD UI DESIGNER',
				company: 'BIG DESIGN COMPANY, NY, USA',
				date: '2018 - 2016',
				description:
					'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima'
			},
			{
				title: 'LEAD UI DESIGNER',
				company: 'BIG DESIGN COMPANY, NY, USA',
				date: '2018 - 2016',
				description:
					'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima'
			}
		]
	}
]

// Screen EDUCATION

export const personalEducation = [
	{
		title: 'EDUCATION'
	},
	{
		education: [
			{
				title: 'LEAD UI DESIGNER',
				school: 'BIG DESIGN COMPANY, NY, USA',
				date: '2018 - 2016',
				description:
					'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima'
			},
			{
				title: 'LEAD UI DESIGNER',
				school: 'BIG DESIGN COMPANY, NY, USA',
				date: '2018 - 2016',
				description:
					'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima'
			},
			{
				title: 'LEAD UI DESIGNER',
				school: 'BIG DESIGN COMPANY, NY, USA',
				date: '2018 - 2016',
				description:
					'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima'
			}
		]
	}
]
