import React from 'react';
import Proptypes from 'prop-types';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.propTypes = {
  message: Proptypes.string.isRequired,
};

export default Notification;
