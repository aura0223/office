import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import './Hero.scss';

export default function Hero() {
  return (
    <Box id="hero">
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <p className='hero__title'>夜の闇を明るくする<br />ロナルド吸血鬼退治事務所</p>
        <p className='hero__text'>
          私たちは、長年の経験と知識を持つ専門家チームで構成され、吸血鬼や闇の怪物たちとの戦いに果敢に立ち向かいます。
          お困りごとはロナルド吸血鬼退治事務所にお任せください。<br />
          あなたの平和な眠りを守ります。
        </p>
      </Container>
    </Box>
  );
}
