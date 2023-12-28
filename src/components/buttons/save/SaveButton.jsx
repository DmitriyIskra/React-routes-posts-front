import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './css/style.module.css';

// Контекст
import AllPosts from '../../../context/AllPosts';

export default function SaveButton({id}) {
    const { setPosts } = useContext(AllPosts);

    const handler = async (e) => {
      const wrapper = e.target.parentElement.parentElement;
      const textArea = wrapper.querySelector('textarea');
      const content = textArea.value;
      textArea.value = '';

      const data = {
        id,
        content,
      }

      try {
        const response = await fetch(`http://localhost:7070${process.env.REACT_APP_GET_POSTS}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
        })

        if(response.status === 204) {
            const response = await fetch(`http://localhost:7070${process.env.REACT_APP_GET_POSTS}`);
            const result = await response.json();
            setPosts(result)
            console.log('PUT Ok');
        } else {
            throw new Error('PUT не удался');
        }
      } catch(error) {
        console.log(error)
      }
    }

    return (
        <Link className={styles.button} onClick={handler} to={`/posts/${id}`}>Сохранить</Link> 
    )
}
