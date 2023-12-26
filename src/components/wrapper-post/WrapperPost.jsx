import React from 'react';
import styles from './css/style.module.css';

export default function WrapperPost({id, children}) {
  return (
    <li className={styles.item} id={id}>
        {children}
    </li>
  )
}
