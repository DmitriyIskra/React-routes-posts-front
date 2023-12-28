import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import AllPosts from '../../../context/AllPosts';

import styles from './css/style.module.css';



export default function DeleteButton() {
  const {setPosts} = useContext(AllPosts);

  const onclickHandler = (e) => {
    const id = e.target.closest('li').id;

    (async () => {
      try {
        const response = await fetch(`http://localhost:7070${process.env.REACT_APP_GET_POSTS}/${id}`, {
          method: 'DELETE',
        });
  
        if(response.status === 204) {
          const response = await fetch(`http://localhost:7070${process.env.REACT_APP_GET_POSTS}`);
          const result = await response.json();
          setPosts(result); 
        }
      } catch(error) {
        throw new Error('Some thing going not wrong')
      }
    })()
  }

  return (
    <Link className={styles.button} onClick={onclickHandler} to="/main">Удалить</Link>
  )
}
