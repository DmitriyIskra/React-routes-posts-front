import React from 'react';

import styles from './css/style.module.css';

import WrapperPost from '../../components/wrapper-post/WrapperPost';
import HeaderNew from '../../components/headers/headerNew/HeaderNew';
import InputContent from '../../components/inputContent/InputContent';
import Public from '../../components/buttons/public/PublicButton';
import CloseButton from '../../components/buttons/close/CloseButton';

export default function Create() {
  return (
    <WrapperPost>
      <div className={styles['wr-header']}>
        <HeaderNew />
        <CloseButton path='/main'/>
      </div>
      <InputContent />
      <div className={styles["wr-button"]}>
        <Public />
      </div>
    </WrapperPost>
  )
}
