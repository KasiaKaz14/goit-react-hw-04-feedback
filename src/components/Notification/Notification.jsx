import css from './Notification.module.css';

import React, { useRef, useEffect } from 'react';

export const Notification = ({ message }) => {
  const messageRef = useRef(null);

  useEffect(() => {
    messageRef.current.innerHTML = message;
  }, [message]);

  return <span className={css.message} ref={messageRef} />;
};
