import React from 'react';
import Proptypes from 'prop-types';
import Title from '../common/Title';
import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      <Title text={title} />
      {children}
    </section>
  );
};

Section.propTypes = {
  title: Proptypes.string,
};

export default Section;
