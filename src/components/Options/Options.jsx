import React from 'react';
import styles from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn} onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button className={styles.btn} onClick={() => updateFeedback('neutral')}>
        Neutral
      </button>
      <button className={styles.btn} onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={styles.btn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
