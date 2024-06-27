import * as React from 'react';
import Box from '@mui/material/Box';

import './Title.scss';
import Logo from './img/img.png'

export default function title() {
  return (
    <Box id="title">
      <div className='title__wrap'>
        <img
          className='title__img'
          src={Logo}
          alt=""
        />
        <div className='title__box'>
          <p className='title__title'>タイトル</p>
          <p className='title__text'>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
    </Box>
  );
}
