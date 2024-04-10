import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

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
          <p className='title__title'>夜の闇を明るくする<br />ロナルド吸血鬼退治事務所</p>
          <p className='title__text'>
            私たちは、長年の経験と知識を持つ専門家チームで構成され、吸血鬼や闇の怪物たちとの戦いに果敢に立ち向かいます。
            お困りごとはロナルド吸血鬼退治事務所にお任せください。<br />
            あなたの平和な眠りを守ります。
          </p>
        </div>
      </div>
    </Box>
  );
}
