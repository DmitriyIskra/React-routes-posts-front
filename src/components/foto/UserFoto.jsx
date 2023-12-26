import React from 'react';
import styles from './css/style.module.css';

import avatar from '../../assets/avatar/unnamed.jpg';

export default function UserFoto() {
  return (
    <div className={styles.foto}>
        <img src={avatar} alt="..." />
    </div>
  )
} 
