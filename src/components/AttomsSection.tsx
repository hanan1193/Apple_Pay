import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import CardSection from './CardSection';
import cardItems from '../data/cardItems';
import PaymentCard from './PaymentDetailsCard';
import sideButtonImg from '../assets/sideButton.png';
import fingerprintImg from '../assets/fingerprint.png';

const AttomsSection: React.FC = () => {
  return (
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
      {/* First Box */}
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

      {/* Second Box */}
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
         imageSrc={sideButtonImg}
        />
        <PaymentCard
          mode="light"
          method="touchID"
          imageSrc={fingerprintImg}
        />
        <PaymentCard
          mode="dark"
          method="sideButton"
          imageSrc={sideButtonImg}
        />
        <PaymentCard
          mode="dark"
          method="touchID"
          imageSrc={fingerprintImg}
        />
      </Box>

      {/* Third Box */}
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
  );
};

export default AttomsSection;

