import React from 'react';
import { Link } from 'react-router-dom';

import usePosts from '../../../hooks/usePosts';

import styles from './css/style.module.css';

export default function DeleteButton() {
  const onclickHandler = (e) => {
    const id = e.target.closest('li').id;

    (async () => {
      await fetch(`http://localhost:7070${process.env.REACT_APP_GET_POSTS}/${id}`, {
        method: 'DELETE',
      });
    })()
  }

  return (
    <Link className={styles.button} onClick={onclickHandler} to="/main">Удалить</Link>
  )
}
