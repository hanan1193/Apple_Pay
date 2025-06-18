import React from 'react';
import { Box } from '@mui/material';
import SideLabel from './SideLabel';

const VariantLabels: React.FC = () => {
  return (
    <Box
      sx={{
        width: '208px',
        height: '920px',
        top: '124px', 
        left: '471px', 
        display: 'flex',
        flexDirection: 'column',
         justifyContent: 'space-between', 
        gap: 5, 
        color: '#FFFFFF',
        mt: 12,
      }}
    >
      <SideLabel themeType="Light" label="Apple Card" />
      <SideLabel themeType="Light" label="Contact" />
      <SideLabel themeType="Light" label="Shipping Info" />
      <SideLabel themeType="Light" label="Shipping Method" />
      <SideLabel themeType="Dark" label="Apple Card" />
      <SideLabel themeType="Dark" label="Contact" />
      <SideLabel themeType="Dark" label="Shipping Info" />
      <SideLabel themeType="Dark" label="Shipping Method" />
    </Box>
  );
};

export default VariantLabels;
