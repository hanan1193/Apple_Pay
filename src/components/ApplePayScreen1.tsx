

import React from 'react';
import { Box, Typography, Paper, Avatar, IconButton } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import sideButton from '/sideButton.png';
import CardItem from './CardItem';
import cardItems from '../data/cardItems';
import type { ApplePayScreen1Props } from '../types';


const ApplePayScreen1: React.FC<ApplePayScreen1Props> = ({ mode = 'light' }) => {
  const isDark = mode === 'dark';

  return (
    <Box
      sx={{
        width: 390,
        height: 844,
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: 3,
        mx: 'auto',
        bgcolor: isDark ? '#000' : 'white',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Black background at the top*/}
      <Box
        sx={{
          width: '100%',
          height: 380,
          bgcolor: 'black',
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          pb: 15,
          zIndex: 1,
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px',
        }}
      >
        <Typography
          sx={{
            color: '#bdbdbd',
            fontSize: 22,
            textAlign: 'right',
            lineHeight: 1.2,
            fontWeight: 500,
            pr: 3,
            pb: 1,
          }}
        >
          Double Click<br />to Pay
        </Typography>
      </Box>

      <Box sx={{ position: 'absolute', top: 350, width: '100%', zIndex: 2 }}>
        <Paper
          elevation={0}
          sx={{
            width: '100%',
            bgcolor: isDark ? '#1c1c1e' : '#f2f2f7',
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            pt: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header */}
          <Box display="flex" alignItems="center" px={3} pb={1}>
            <AppleIcon sx={{ fontSize: 32, mr: 1, color: isDark ? 'white' : 'black' }} />
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: isDark ? 'white' : 'black' }}
            >
              Pay
            </Typography>
          </Box>

          {/* Apple Card & Contact */}
          <Box px={2} pb={1}>
            <Box sx={{ bgcolor: isDark ? '#2c2c2e' : 'white', borderRadius: 2, mb: 2 }}>
              <CardItem data={cardItems[0]} dark={isDark} />
            </Box>
            <Box sx={{ bgcolor: isDark ? '#2c2c2e' : 'white', borderRadius: 2, mb: 2 }}>
              <CardItem data={cardItems[1]} dark={isDark} />
            </Box>
          </Box>

          {/* Pay Stark Industries */}
          <Box
            sx={{
              width: '100%',
              bgcolor: isDark ? '#2c2c2e' : '#f7f7fa',
              px: 3,
              py: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography color={isDark ? '#ccc' : 'text.secondary'} fontSize={16}>
                Pay Stark Industries
              </Typography>
              <Typography
                fontSize={24}
                fontWeight="bold"
                sx={{ mt: 0.5, color: isDark ? 'white' : 'black' }}
              >
                $1.99
              </Typography>
            </Box>
            <IconButton sx={{ color: isDark ? '#ccc' : 'inherit' }}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>

          {/* Divider */}
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: '90%',
                height: '1.5px',
                bgcolor: isDark ? '#444' : '#bdbdbd',
                borderRadius: 1,
              }}
            />
          </Box>

          {/* Confirm with Side Button */}
          <Box
            sx={{
              width: '100%',
              bgcolor: isDark ? '#1c1c1e' : '#f2f2f7',
              p: 1.5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar
              src={sideButton}
              sx={{ width: 40, height: 40, mb: 0.5, bgcolor: 'transparent' }}
              variant="circular"
            />
            <Typography
              fontSize={13}
              fontWeight="500"
              sx={{ mb: 0.5, color: isDark ? '#ccc' : 'text.secondary' }}
            >
              Confirm with Side Button
            </Typography>
            <Box sx={{ width: 140, height: 3, bgcolor: isDark ? 'white' : 'black', borderRadius: 2 }} />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default ApplePayScreen1;

