import React from 'react';
import styles from './css/style.module.css';
import UserFoto from '../foto/UserFoto';

export default function Comment() {
  return (
    <div className={styles.wrapper}>
        <div className={styles['wr-user-foto']}>
            <UserFoto />
        </div>
        <div className={styles['wr-input']}>
            <input type="text" placeholder='Напишите комментарий'/>
        </div>
    </div>
  )
}
