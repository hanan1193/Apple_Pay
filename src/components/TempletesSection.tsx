
import React from 'react';
import { Box, Typography } from '@mui/material';
import ApplePayScreen1 from './ApplePayScreen1';
import ApplePayScreen2 from './ApplePayScreen2';
import SideLabel from './SideLabel';

const TempletesSection: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Typography
        sx={{
          fontFamily: 'SF Mono',
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: '24px',
          letterSpacing: '0.38px',
          verticalAlign: 'middle',
          mb: 4,
          color: '#000000',
          ml: 3,
        }}
      >
        Apple Pay
      </Typography>

      {/* Labels Row */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          mb: 2,
          pr: 15,
        }}
      >
        <SideLabel themeType="Light" label="FaceID" />
        <SideLabel themeType="Light" label="TouchID" />
        <SideLabel themeType="Dark" label="FaceID" />
        <SideLabel themeType="Dark" label="TouchID" />
      </Box>

      {/* Screens Container */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FAFAFA',
          minHeight: '100vh',
          height: 908,
          borderRadius: '16px',
          border: '1px dashed #7B61FF',
          p:30,
          gap: '32px',
          width:'1690px',
          ml:4,
        }}
      >
        {/* ApplePayScreen */}
        <Box sx={{ display: 'flex', gap: '32px' }}>
          <ApplePayScreen1 mode="light" />
          <ApplePayScreen2 mode="light" />
          <ApplePayScreen1 mode="dark" />
          <ApplePayScreen2 mode="dark" />
        </Box>
      </Box>
    </Box>
  );
};

export default TempletesSection;


