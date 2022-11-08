import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

export const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    return Object.values(feedbacks).reduce((total, value) => total + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedbacks;
    const total = countTotalFeedback();
    const result = total ? (good / total) * 100 : 0;
    return +result.toFixed(0);
  };

  return (
    <div className="app">
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedbacks} onLeaveFeedback={setFeedbacks} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={feedbacks.good}
          neutral={feedbacks.neutral}
          bad={feedbacks.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};
