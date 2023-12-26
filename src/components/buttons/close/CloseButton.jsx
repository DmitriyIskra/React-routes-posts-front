import React from 'react';
import { Link } from 'react-router-dom';

import styles from './css/style.module.css';

import pathImg from '../../../assets/buttons/close-icon.jpg';

export default function CloseButton() {
  return (
    <Link className={styles.wrapper} to="/main">
      <img src={pathImg} alt="..." />
    </Link>
  )
}
