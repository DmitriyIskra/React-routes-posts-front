import styles from './css/style.module.css';

import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// context
import AllPosts from '../../context/AllPosts';

// components
import WrapperPost from '../../components/wrapper-post/WrapperPost';
import Header from '../../components/headers/header/Header';
import Content from '../../components/content/Content';
import Comment from '../../components/comment/Comment';

export default function List() {
  
  const posts = useContext(AllPosts);

  return (
    <ul className={styles.list}>
      {posts.map( item => {
        return(
          <Link key={item.id} to={`/posts/${item.id}`}>
            <WrapperPost id={item.id}>
                <Header date={item.created} />
                <Content text={item.content} />
                <Comment />
            </WrapperPost>
          </Link>
        )
      } )}
    </ul>
  )
}
