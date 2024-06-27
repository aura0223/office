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
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  },
  {
    avatar: <Avatar alt="" src="/static/images/avatar/2.jpg" />,
    name: 'xxxxさん',
    testimonial:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  },
  {
    avatar: <Avatar alt="" src="/static/images/avatar/1.jpg" />,
    name: 'xxxxさん',
    testimonial:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  },
  {
    avatar: <Avatar alt="" src="/static/images/avatar/2.jpg" />,
    name: 'xxxxさん',
    testimonial:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
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
      <p className='example__text'>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
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
