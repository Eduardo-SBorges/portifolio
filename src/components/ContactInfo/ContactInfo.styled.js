import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  margin-bottom: 30px !important;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`
export const UL = styled(motion.ul)`
list-style: none;
display: flex;
justify-content: space-between;
width: 100%;
padding-right: 15px;
padding-left: 15px;


@media (max-width: 786px) {
  flex-direction: column;
  }

svg {
font-size: 50px;
margin-bottom: 10px;
line-height: 1em;
}
h4 {
font-size: 18px;
font-weight: 600;
}
p {
font-size: 14.5px;
line-height: 22px;
margin-bottom: 0;
margin-top: 15px;
margin-bottom: 15px;
}
li{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 1.2%;
  margin-left: 1.2%;
  padding-left: 30px;
  padding-right: 30px;
}
`