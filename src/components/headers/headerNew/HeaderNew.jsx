import React from 'react';
import styles from './css/style.module.css';

export default function HeaderNew() {
  return (
    <ul className={styles.wrapper}>
        <li className={styles.item}>Публикация</li>
        <li className={styles.item}>Фото/видео</li>
        <li className={styles.item}>Прямой эфир</li>
        <li className={styles.item}>Еще</li>
    </ul>
  )
}
