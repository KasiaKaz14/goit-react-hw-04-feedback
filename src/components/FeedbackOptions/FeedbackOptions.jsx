import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleButtonClick = option => {
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
