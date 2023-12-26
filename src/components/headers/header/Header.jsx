import React from 'react';
import styles from './css/style.module.css';
import UserFoto from '../../foto/UserFoto';

import { format } from 'date-fns';

export default function Header({date}) {
  const m = new Date(date);
  const d = format(m, 'dd.MM.yy HH:mm');

  return (
    <header>
        <div className={styles.wrapper}>
            <div className={styles['wr-foto']}>
              <UserFoto />
            </div>
            <div className={styles['wr-info']}>
                <div className={styles.name}>Ivan Ivanov</div>
                <div className={styles['status-date']}>
                    <span className={styles.status}>Owner group</span>
                    <span className={styles.dot}></span>
                    <span className={styles.date}>{d}</span>
                </div>
            </div>
        </div> 
    </header>
  )
}
