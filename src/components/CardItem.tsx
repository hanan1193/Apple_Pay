import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import type { CardItemProps } from '../types';

const CardItem: React.FC<CardItemProps> = ({ data, dark }) => {
  return (
    <Card
      sx={{
        backgroundColor: dark ? '#2c2c2e' : 'transparent',
        color: dark ? '#fff' : '#000',
        borderRadius: '13px',
        mb: 2,
        width: '375px',
        padding: '16px',
        boxShadow: dark ? 1 : 'none',
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: 0,
        }}
      >
        <Box display="flex" alignItems="flex-start">
          <Box
            mr={2}
            sx={{
              backgroundColor: dark ? '#000000' : '#f0f0f0',
              borderRadius: '6px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: 0.5,
            }}
          >
            {data.icon}
          </Box>
          <Box sx={{ maxWidth: '240px' }}>
            <Typography variant="body2" color={dark ? 'grey.400' : 'text.secondary'}>
              {data.cardTitle}
            </Typography>
            {data.cardSubtitle && (
              <Typography variant="subtitle2" noWrap={false}>
                {data.cardSubtitle}
              </Typography>
            )}
            {data.details && (
              <Typography variant="body2" sx={{ wordWrap: 'break-word', whiteSpace: 'normal' }}>
                {data.details}
              </Typography>
            )}
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="flex-end" mt={0.5}>
          {data.price && (
            <Typography variant="body2" mr={1} sx={{ color: '#BDBDBD' }}>
              {data.price}
            </Typography>
          )}
          <ArrowForwardIosIcon fontSize="small" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardItem;
