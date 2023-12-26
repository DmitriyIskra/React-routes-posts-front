import React from 'react';
import { Link } from 'react-router-dom';

import styles from './css/style.module.css';

export default function Public() {
  return (
    <Link className={styles.button} to='/'>Опубликовать</Link>
  )
}
