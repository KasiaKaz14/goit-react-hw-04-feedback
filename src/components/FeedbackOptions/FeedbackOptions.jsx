import React, { useState } from 'react';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [feedbackOptions, setFeedbackOptions] = useState(options);

  const handleButtonClick = option => {
    onLeaveFeedback(option);
  };

  return (
    <>
      {feedbackOptions.map((option, index) => {
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
