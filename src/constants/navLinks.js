import {
	HomeOutlined,
	PermIdentity,
	BadgeOutlined,
	WorkOutlineOutlined,
	EmailOutlined,
	BookOutlined,
} from '@mui/icons-material'

//Dados deverão estar em uma array de objetos e serem chamados usando o comando .map( ) retornando uma lista (<ul> ... <ul>).

const sizeLogoSvg = `large`

export const navLinks = [
	{ name: 'INICIO', svgLogo: <HomeOutlined fontSize={sizeLogoSvg} /> },
	{ name: 'SOBRE', svgLogo: <PermIdentity fontSize={sizeLogoSvg} /> },
	{ name: 'EXPERIÊNCIA', svgLogo: <BadgeOutlined fontSize={sizeLogoSvg} /> },
	{ name: 'HABILIDADES', svgLogo: <BookOutlined fontSize={sizeLogoSvg} /> },
	{
		name: 'PORTFÓLIO',
		svgLogo: <WorkOutlineOutlined fontSize={sizeLogoSvg} />
	},
	{ name: 'CONTATO', svgLogo: <EmailOutlined fontSize={sizeLogoSvg} /> }
]
