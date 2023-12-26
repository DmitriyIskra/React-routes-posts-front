import React from 'react';
import styles from './css/style.module.css';

import { Link } from 'react-router-dom';

export default function ChangeButton() {
  return (
    <Link className={styles.button} type='button'>Изменить</Link>
  )
}
