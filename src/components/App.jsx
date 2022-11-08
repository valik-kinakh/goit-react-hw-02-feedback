import { useReducer } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import { feedbackReducer } from '../store/feedbackReducer';

export const App = () => {
  const [feedbacks, dispatch] = useReducer(feedbackReducer, {
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
        <FeedbackOptions onLeaveFeedback={dispatch} />
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
