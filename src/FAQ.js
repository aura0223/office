import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import './FAQ.scss';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 8, sm: 8 },
        pb: { xs: 8, sm: 8 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '100%' },
        }}
      >
      <h2 className='faq__title'>よくある質問</h2>
      <p className='faq__text'>以下は、ロナルド吸血鬼退治事務所によせられた質問です。</p>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="subtitle2">
            吸血鬼から身を守るための対策はありますか？
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              はい、ロナルド吸血鬼退治事務所では、吸血鬼から身を守るための様々な対策を提案しています。例えば、対魔法アイテムの使用や適切なセキュリティ対策の実施などがあります。また、緊急時には迅速な対応を行い、危険から避難させることも可能です。
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
            吸血鬼の退治にはどれくらいの時間がかかりますか？
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              吸血鬼の退治にかかる時間は状況によって異なります。一般的には、吸血鬼の巣窟の位置や規模、吸血鬼の強さなどによって異なります。しかし、当事務所は迅速かつ効果的な行動を取り、できる限り早く吸血鬼を排除するよう努めています。
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="subtitle2">
            吸血鬼の存在は本当ですか？
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              当事務所では、吸血鬼の存在を真剣に受け止めており、長年の経験と専門知識を持つチームが、吸血鬼に関する事案に対処しています。
            </Typography>
          </AccordionDetails>
        </Accordion>
    </Box>
    </Container>
  );
}
