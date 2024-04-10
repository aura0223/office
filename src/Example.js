import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import './Example.scss';

const userExample = [
  {
    avatar: <Avatar alt="" src="/static/images/avatar/1.jpg" />,
    name: 'xxxxさん',
    testimonial:
      "街の近くに吸血鬼の巣窟があるとの報告があり、安全な方法でその巣窟を排除してほしい。",
  },
  {
    avatar: <Avatar alt="" src="/static/images/avatar/2.jpg" />,
    name: 'xxxxさん',
    testimonial:
      "最近、不審な吸血事件が増加しているため、吸血鬼の活動パターンや出没地を調査し、対策を提案してほしい。",
  },
  {
    avatar: <Avatar alt="" src="/static/images/avatar/1.jpg" />,
    name: 'xxxxさん',
    testimonial:
      "吸血鬼に襲われる危険に晒されているかもしれない場所や個人を守るためのセキュリティ対策を実施してほしい。",
  },
  {
    avatar: <Avatar alt="" src="/static/images/avatar/2.jpg" />,
    name: 'xxxxさん',
    testimonial:
      "特定の吸血鬼が特定の地域で人々に危害を加えているという情報があり、その吸血鬼を退治してほしい。",
  },
];

export default function Example() {

  return (
    <Container
      id="Example"
      sx={{
        pt: { xs: 4, sm: 4 },
        pb: { xs: 8, sm: 8 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 3, sm: 6 }
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
        }}
      >
      <h2 className='example__title'>参考事例</h2>
      <p className='example__text'>以下は、ロナルド吸血鬼退治事務所に対する依頼内容の参考事例です</p>
      </Box>
      <Grid container spacing={2}>
        {userExample.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
