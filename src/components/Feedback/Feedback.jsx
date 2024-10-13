import React from 'react';
import styles from './Feedback.module.css';

const Feedback = ({ feedbacks, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={styles.feedbackList}>
      <li className={styles.feedbackListItem}>Good: {feedbacks.good}</li>
      <li className={styles.feedbackListItem}>Neutral: {feedbacks.neutral}</li>
      <li className={styles.feedbackListItem}>Bad: {feedbacks.bad}</li>
      <li
        className={`${styles.feedbackListItem} ${
          totalFeedback === 0 ? styles.hidden : ''
        }`}
      >
        Total: {totalFeedback}
      </li>
      <li
        className={`${styles.feedbackListItem} ${
          totalFeedback === 0 ? styles.hidden : ''
        }`}
      >
        Positive: {positiveFeedback}%
      </li>
    </ul>
  );
};

export default Feedback;
