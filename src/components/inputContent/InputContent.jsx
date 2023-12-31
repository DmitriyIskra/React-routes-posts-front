import React from 'react';
import styles from './css/style.module.css';

import UserFoto from '../foto/UserFoto';

export default function InputContent({text}) {
  return (
    <div className={styles.wrapper}>
        <div className={styles['wrapper-photo']}>
          <UserFoto />
        </div>
        <textarea 
          className={styles.text} 
          placeholder={'Введите текст'}
          defaultValue={text ? text : ''}
        ></textarea>
    </div>
  )
} 
