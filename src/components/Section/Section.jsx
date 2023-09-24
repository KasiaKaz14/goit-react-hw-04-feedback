import React, { useState } from 'react';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={css.container}>
      {title && <h2 onClick={toggleExpand}>{title}</h2>}
      {isExpanded && children}
    </div>
  );
};
