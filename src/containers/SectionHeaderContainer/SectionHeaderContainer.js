import React from 'react'
import { ContainerHeader } from './SectionHeaderContainer.styled'
import  Title  from '../../components/Title/Title'
import {
  HomeOutlined,
  PermIdentity,
  BadgeOutlined,
  WorkOutlineOutlined,
  EmailOutlined,
  BookOutlined,
} from '@mui/icons-material'

const SectionHeaderContainer = ({ text,icon }) => {
  switch (icon) {
    case 'home':
      icon = <HomeOutlined fontSize="large" />
      break
    case 'about':
      icon = <PermIdentity fontSize="large" />
      break
    case 'experience':
      icon = <BadgeOutlined fontSize="large" />
      break
    case 'skills':
      icon = <BookOutlined fontSize="large" />
      break
    case 'portfolio':
      icon = <WorkOutlineOutlined fontSize="large" />
      break
    case 'contact':
      icon = <EmailOutlined fontSize="large" />
      break
    default:
      icon = <HomeOutlined fontSize="large" />
      break
  }
  {
    return (
      <ContainerHeader>
        <Title size="h2" text={text}/>
        {icon}
      </ContainerHeader>
    )
  }
}
export default SectionHeaderContainer
