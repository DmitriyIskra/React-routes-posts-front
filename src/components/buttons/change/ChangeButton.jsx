import React from 'react';
import styles from './css/style.module.css';

import { Link } from 'react-router-dom';

export default function ChangeButton({id, content}) {
  return (
    <Link className={styles.button} to={`/posts/change/${id}`}>Изменить</Link>
  )
}
