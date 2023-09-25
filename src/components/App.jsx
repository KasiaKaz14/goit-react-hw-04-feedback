import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import React, { useState } from 'react';

export const App = () => {
  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = stats;

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setStats(prevStats => ({
          ...prevStats,
          good: prevStats.good + 1,
        }));
        break;
      case 'neutral':
        setStats(prevStats => ({
          ...prevStats,
          neutral: prevStats.neutral + 1,
        }));
        break;
      case 'bad':
        setStats(prevStats => ({
          ...prevStats,
          bad: prevStats.bad + 1,
        }));
        break;
      default:
        break;
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = total ? Math.round((good / total) * 100) : 0;

  return (
    <Section
      style={{
        maxWidth: '600',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'rgba(216, 240, 183, 1)',
        border: '2px solid gray',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={option => onLeaveFeedback(option)}
        />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Section>
  );
};
