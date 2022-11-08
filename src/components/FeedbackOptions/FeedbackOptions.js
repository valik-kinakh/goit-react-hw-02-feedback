import React from 'react';
import Proptypes from 'prop-types';
import s from './FeedbackOptions.module.css';
import Button from '../common/Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const onGoodOptionClick = () => {
    onLeaveFeedback({
      ...options,
      good: (options.good += 1),
    });
  };

  const onNeutralOptionClick = () => {
    onLeaveFeedback({
      ...options,
      neutral: (options.neutral += 1),
    });
  };

  const onBadOptionClick = () => {
    onLeaveFeedback({
      ...options,
      bad: (options.bad += 1),
    });
  };

  return (
    <div className={s.options}>
      <Button handleClick={onGoodOptionClick} text="Good" />
      <Button handleClick={onNeutralOptionClick} text="Neutral" />
      <Button handleClick={onBadOptionClick} text="Bad" />
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: Proptypes.shape({
    good: Proptypes.number,
    neutral: Proptypes.number,
    bad: Proptypes.number,
  }).isRequired,
  onLeaveFeedback: Proptypes.func.isRequired,
};

export default FeedbackOptions;
