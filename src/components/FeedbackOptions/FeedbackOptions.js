import React from 'react';
import Proptypes from 'prop-types';
import s from './FeedbackOptions.module.css';
import Button from '../common/Button';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  const onGoodOptionClick = () => {
    onLeaveFeedback({
      type: 'good',
    });
  };

  const onNeutralOptionClick = () => {
    onLeaveFeedback({
      type: 'neutral',
    });
  };

  const onBadOptionClick = () => {
    onLeaveFeedback({
      type: 'bad',
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
  onLeaveFeedback: Proptypes.func.isRequired,
};

export default FeedbackOptions;
