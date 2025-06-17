import React from 'react';
import { Box } from '@mui/material';
import SideLabel from './SideLabel';

const VariantLabels: React.FC = () => {
  return (
    <Box
      sx={{
        width: '208px',
        height: '920px',
        position: 'absolute',
        top: '80px', 
        left: '550px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', 
        gap: 10, 
        color: '#000000',
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
