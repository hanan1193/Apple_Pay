

import React from 'react';
import { Box, Typography, Paper, Avatar, IconButton } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import fingerprint from '/fingerprint.png';
import CardItem from './CardItem';
import cardItems from '../data/cardItemsData';
import type { ApplePayScreen2Props } from '../types';


const ApplePayScreen2: React.FC<ApplePayScreen2Props> = ({ mode = 'light' }) => {
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
          height: 240,
          bgcolor: 'black',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: 210,
          width: '100%',
          zIndex: 2,
        }}
      >
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
            flexShrink: 0,
          }}
        >
          {/* Header */}
          <Box display="flex" alignItems="center" px={3} pb={1}>
            <AppleIcon sx={{ fontSize: 32, mr: 1, color: isDark ? 'white' : 'black' }} />
            <Typography variant="h5" fontWeight="bold" sx={{ color: isDark ? 'white' : 'black' }}>
              Pay
            </Typography>
          </Box>

          {/* Apple Card & Contact */}
          <Box px={2} pb={1}>
            <Box sx={{ bgcolor: isDark ? '#2c2c2e' : 'white', borderRadius: 2, mb: 2 }}>
              <CardItem data={cardItems[0]} dark={isDark} />
            </Box>
            <Box sx={{ bgcolor: isDark ? '#2c2c2e' : 'white', borderRadius: 2, mb: 2 }}>
              <CardItem data={cardItems[2]} dark={isDark} />
            </Box>
            <Box sx={{ bgcolor: isDark ? '#2c2c2e' : 'white', borderRadius: 2, mb: 2 }}>
              <CardItem data={cardItems[2]} dark={isDark} />
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
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', bgcolor: isDark ? '#1c1c1e' : 'white' }}>
            <Box sx={{ width: '100%', height: '1.5px', bgcolor: isDark ? '#444' : '#e0e0e0', borderRadius: 1 }} />
          </Box>

          {/* Pay with TouchID */}
          <Box
            sx={{
              width: '100%',
              bgcolor: isDark ? '#1c1c1e' : 'white',
              py: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar
              src={fingerprint}
              sx={{ width: 44, height: 44, mb: 1, bgcolor: 'transparent' }}
              variant="circular"
            />
            <Typography fontSize={17} fontWeight={400} color={isDark ? '#ccc' : 'text.secondary'}>
              Pay with TouchID
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default ApplePayScreen2;