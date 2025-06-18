import React from 'react';
import {  Typography } from '@mui/material';
import type { SideLabelProps } from '../types';


const SideLabel: React.FC<SideLabelProps> = ({ themeType, label }) => {
  return (
      <Typography
        sx={{
          fontFamily: 'SF Mono',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '24px',
          letterSpacing: '0.38px',
          verticalAlign: 'middle',
          color:'#555555',
        }}
      >
        {themeType} / {label}
      </Typography>
  );
};

export default SideLabel;
