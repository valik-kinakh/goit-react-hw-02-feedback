import React from 'react';
import Proptypes from 'prop-types';
import s from './Title.module.css';

const Title = ({ text }) => {
  return <h1 className={s.title}>{text}</h1>;
};

Title.propTypes = {
  text: Proptypes.string.isRequired,
};

export default Title;
