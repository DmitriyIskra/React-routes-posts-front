import React from 'react';
import { Link } from 'react-router-dom';

import styles from './css/style.module.css';

import pathImg from '../../../assets/buttons/close-icon.jpg';

export default function CloseButton({path}) {
  return (
    <Link className={styles.wrapper} to={path}>
      <img src={pathImg} alt="..." />
    </Link>
  )
}
