import React from 'react';
import { Box } from '@mui/material';
import SideLabel from './SideLabel';

const VariantLabels2: React.FC = () => {
  return (
    <Box
      sx={{
        width: '136px',
        height: '687px',
        top: '171px', 
        left: '471px', 
        display: 'flex',
        flexDirection: 'column',
         justifyContent: 'space-between', 
        gap: 2, 
        color: '#FFFFFF',
        mt: 15,
      }}
    >
      <SideLabel themeType="Light" label="FaceID" />
      <SideLabel themeType="Light" label="TouchID" />
      <SideLabel themeType="Dark" label="FaceID" />
      <SideLabel themeType="Dark" label="TouchID" />
    </Box>
  );
};

export default VariantLabels2;