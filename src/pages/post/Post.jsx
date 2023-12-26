import React from 'react';
import styles from './css/style.module.css';

import { useParams } from 'react-router-dom';
import usePosts from '../../hooks/usePosts';

import WrapperPost from '../../components/wrapper-post/WrapperPost';
import Header from '../../components/headers/header/Header';
import Content from '../../components/content/Content';
import ChangeButton from '../../components/buttons/change/ChangeButton';
import DeleteButton from '../../components/buttons/delete/DeleteButton';
import CloseButton from '../../components/buttons/close/CloseButton';

export default function Post() {
  const params = useParams();
  const { id } = params;
  
  const posts = usePosts(`${process.env.REACT_APP_GET_POSTS}/${id}`);

  return (
    <>
      {posts && <ul style={{position: 'relative'}}>
        <WrapperPost id={id}>
            <div className={styles['wr-close-button']}>
              <CloseButton />
            </div>
            <Header date={posts.post.created}/>
            <Content text={posts.post.content}/>
            <div className={styles['wrapper-buttons']}>
                <ChangeButton />
                <DeleteButton />
            </div>
        </WrapperPost>
    </ul>}
    </>
  )
}
