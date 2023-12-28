import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { v4 } from 'uuid';

import SaveButton from '../../components/buttons/save/SaveButton';
import CloseButton from '../../components/buttons/close/CloseButton';
import InputContent from '../../components/inputContent/InputContent';

import styles from './css/style.module.css';

const listTabs = [
  'Фото/видео', 'Чувства/действия', 'GIF', 'Отметить друзей', 'Отметить посещение'
];

export default function Update() {
  const [state, setState] = useState()
  const params = useParams();
  const { id } = params; 

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:7070${process.env.REACT_APP_GET_POSTS}/${id}`);
      const result = await response.json();
      setState(result);
      
    })();
  }, [])

  return (
    <>
      {state && <div className={styles.wrapper}>
        <header className={styles.header}>
            <h2 className={styles.title}>Редактировать публикацию</h2>
            <CloseButton path={`/posts/${id}`}/>
        </header>
        <InputContent text={state.post.content}/>
        <ul className={styles['tabs-list']}>
          {listTabs.map( item => {
            return  <li key={v4()} className={styles['tabs-item']}>
                      {item}
                    </li>
          })}
        </ul>
        <div className={styles["wrapper-button"]}>
          <SaveButton id={id}/>
        </div>
      </div>}
    </>
    
  )
}
