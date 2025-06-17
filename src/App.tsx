
import React from 'react';
import { Box, Typography, CssBaseline } from '@mui/material';
import CardSection from './components/CardSection';
import Header from './components/Header';
import Section from './components/Section';
import cardItems from './data/cardItems';
import PaymentCard from './components/PaymentDetailsCard';
import ApplePayScreen from './components/ApplePayScreen';



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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: '32px',
          mt: '56px',
          position: 'relative',
          ml: '20px',
        }}
      >
        <Box
          sx={{
            border: '1px dashed #7B61FF',
            borderRadius: '16px',
            p: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            alignItems: 'flex-start',
            width: '439px',
            height: '1036px',
          }}
        >
          <CardSection items={cardItems} />
          <CardSection items={cardItems} dark />
        </Box>
        <Box
          sx={{
            border: '1px dashed #7B61FF',
            borderRadius: '16px',
            p: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            alignItems: 'flex-start',
            width: '439px',
            height: '940px',
          }}
        >
          <CssBaseline />
          <PaymentCard
            mode="light"
            method="sideButton"
            imageSrc="/sideButton.png"
          />
          <PaymentCard
            mode="light"
            method="touchID"
            imageSrc="/fingerprint.png"
          />
          <PaymentCard
            mode="dark"
            method="sideButton"
            imageSrc="/sideButton.png"
          />
          <PaymentCard
            mode="dark"
            method="touchID"
            imageSrc="/fingerprint.png"
          />
        </Box>
        <Box
          sx={{
            border: '1px dashed #7B61FF',
            borderRadius: '16px',
            p: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            alignItems: 'flex-start',
            width: '439px',
            height: '1036px',
          }}
        >
          <CardSection items={cardItems} />
          <CardSection items={cardItems} dark />
        </Box>
      </Box>
        <Section name="Templet" />
      <ApplePayScreen />   

    </>
  );
};

export default App;