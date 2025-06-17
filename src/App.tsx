
import React from 'react';
import {  Typography } from '@mui/material';
import Header from './components/Header';
import Section from './components/Section';
import ApplePayScreen from './components/ApplePayScreen';
import AttomsSection from './components/AttomsSection';


const App: React.FC = () => {
  return (
    <>
      <Header />
      <Section name="Atoms" />
      <Typography
        sx={{
          fontFamily: 'SF Mono',
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: '24px',
          letterSpacing: '0.38px',
          verticalAlign: 'middle',
          ml: '20px',
        }}
      >
        ApplePay-detailCard
      </Typography>
      <AttomsSection/>
        <Section name="Templet" />
      <ApplePayScreen />   

    </>
  );
};

export default App;