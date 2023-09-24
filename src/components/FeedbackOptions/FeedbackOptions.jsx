import React, { useState } from 'react';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleButtonClick = option => {
    setSelectedOption(option);
    onLeaveFeedback(option);
  };

  return (
    <>
      {options.map((option, index) => {
        return (
          <button
            className={css.button}
            key={index}
            type="button"
            onClick={() => handleButtonClick(option)}
          >
            {option}
          </button>
        );
      })}
    </>
  );
};
