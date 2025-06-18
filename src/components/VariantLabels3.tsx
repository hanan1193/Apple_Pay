import React from 'react';
import { Box } from '@mui/material';
import SideLabel from './SideLabel';

const VariantLabels2: React.FC = () => {
  return (
    <Box
      sx={{
        width: '45px',
        height: '540px',
        top: '100px', 
        left: '471px', 
        display: 'flex',
        flexDirection: 'column',
         justifyContent: 'space-between', 
        gap: 9, 
        color: '#FFFFFF',
        mt: 50,
      }}
    >
      <SideLabel themeType="Light"/>
      <SideLabel themeType="Dark" />
    </Box>
  );
};

export default VariantLabels2;