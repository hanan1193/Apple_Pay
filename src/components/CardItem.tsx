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
    borderRadius: 2,
    mb: 2,
    width: '100%',
    boxShadow: dark ? 1 : 'none', 
    border: dark ? 'none' : 'none', 
  }}
    >
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box display="flex" alignItems="center">
          <Box mr={2}
          sx={{
          backgroundColor: dark ? '#000000' : '#f0f0f0',
          borderRadius: '6px',
          width: 36,
          height: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
          >{data.icon}</Box>
          <Box>
            <Typography variant="body2" color={dark ? 'grey.400' : 'text.secondary'}>
              {data.cardTitle}
            </Typography>
            {data.cardSubtitle && <Typography variant="subtitle2">{data.cardSubtitle}</Typography>}
            {data.details && <Typography variant="body2">{data.details}</Typography>}
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          {data.price && (
            <Typography variant="body2" mr={1}>
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