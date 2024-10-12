import React from 'react';
import styles from './Feedback.module.css';

const Feedback = ({ feedbacks, totalFeedback }) => {
  return (
    <ul className={styles.feedbackList}>
      <li className={styles.feedbackListItem}>Good: {feedbacks.good}</li>
      <li className={styles.feedbackListItem}>Neutral: {feedbacks.neutral}</li>
      <li className={styles.feedbackListItem}>Bad: {feedbacks.bad}</li>
      {totalFeedback > 0 && (
        <>
          <li className={styles.feedbackListItem}>Total: {totalFeedback}</li>
          <li className={styles.feedbackListItem}>
            Positive: {Math.round((feedbacks.good / totalFeedback) * 100)}%
          </li>
        </>
      )}
    </ul>
  );
};

export default Feedback;
