import React from 'react';
import Proptypes from 'prop-types';

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

Button.propTypes = {
  text: Proptypes.string.isRequired,
  handleClick: Proptypes.func.isRequired,
};

export default Button;
