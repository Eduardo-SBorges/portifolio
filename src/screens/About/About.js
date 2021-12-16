import React from 'react'
import { PersonalInfo } from '../../components/PersonalInfo/PersonalInfo'
import { personalData } from '../../constants/data'


const About = () => {
	return (
		<PersonalInfo title={personalData.aboutMeTitle} text={personalData.aboutMeText}/>
	)
}

export default About