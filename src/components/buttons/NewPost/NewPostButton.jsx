import React from 'react';
import styles from './css/style.module.css';
import { Link } from 'react-router-dom';


export default function NewPostButton() {
  return (
    <Link className={styles.button} to={'posts/new'}>Создать пост</Link>
  )
}
