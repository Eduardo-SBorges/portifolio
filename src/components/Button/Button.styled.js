import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Btn = styled.button`
  border: 2px solid #ffffff;
  color: #00a3e1 !important;
  padding: 10px 20px;
  text-transform: uppercase;
  background-color: transparent;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 14px;
  color: #ffffff;
  font-weight: 600;
  position: relative;
  line-height: 100%;
  letter-spacing: 1px;
  overflow: hidden;
  border-color: #00a3e1;
  border-radius: 5px;

  &:hover {
    background-color: #00a3e1;
    color: #000 !important;
    transition: all 0.3s ease;
  }
`;
