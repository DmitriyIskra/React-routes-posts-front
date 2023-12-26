import React from 'react';
import styles from './css/style.module.css';

export default function Content({text}) {
  return (
    <div className="wrapper">
      <div className={styles.content}>{text}</div>
      <div className={styles['wrapper-links']}>
        <div className={styles['wr-link']}>
            <div className={`${styles.like} ${styles.link}`} href="#">Нравится</div>
        </div>
        <div className={styles['wr-link']}>
            <div className={`${styles.comment} ${styles.link}`} href="#">Комментировать</div>
        </div>
      </div>
    </div>
    
  )
}
 