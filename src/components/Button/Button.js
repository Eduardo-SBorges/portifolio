import React from 'react';
import { Btn } from './Button.styled';
import PropTypes from 'prop-types';
import { animaSubItems } from '../../constants/animation';

const Button = ({
  onClick,
  type,
  text,
  size,
  padding,
  width,
  margin,
  ...props
}) => {
  switch (size) {
    case 'medium':
      padding = '10px 15px';
      width = '125px';
      size = '16px';
      break;
    case 'large':
      padding = '10px 20px';
      width = '150px';
      size = '18px';
      break;
    case 'x-large':
      padding = '10px 25px';
      width = '200px';
      size = '20px';
      break;
    case 'small':
      padding = '10px';
      width = '190px';
      size = '14px';
      break;
    default:
      padding = '0';
      width = '150px';
      size = '12px';
      break;
  }

  return (
    <Btn
      variants={animaSubItems}
      onClick={onClick}
      type={type}
      size={size}
      padding={padding}
      width={width}
      {...props}
    >
      {text}
    </Btn>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
};
Button.defaultProps = {
  type: 'Button',
  size: '',
};

export default Button;
