import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import styles from './css/style.module.css';

// Контекст
import AllPosts from '../../../context/AllPosts';


export default function Public() {
  const { setPosts } = useContext(AllPosts);

  const onClickHandler = (e) => {
    
    (async () => {
      const wrapper = e.target.closest('li');
      const textArea = wrapper.querySelector('textarea');

      const text = textArea.value;
      const data = {
        id: 0,
        content: text
      }

      try {
        const response = await fetch(`http://localhost:7070${process.env.REACT_APP_GET_POSTS}`, {
          method: 'POST',
          body: JSON.stringify(data)
        });

        if(response.status === 204) {
          const response = await fetch(`http://localhost:7070${process.env.REACT_APP_GET_POSTS}`);
          const result = await response.json();
          setPosts(result); 
        }
      } catch(error) {
        console.log(error)
      }
      
    })()
  }

  return (
    <Link className={styles.button} onClick={onClickHandler} to='/main'>Опубликовать</Link>
  )
}
