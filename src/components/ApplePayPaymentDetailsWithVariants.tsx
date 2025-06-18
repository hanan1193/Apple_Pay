import React from 'react';
import { Box } from '@mui/material';
import VariantLabels2 from './VariantLabels2';
import ApplePayPaymentDetails from './ApplePayPaymentDetails';

const ApplePayPaymentDetailsWithVariants: React.FC = () => {
  return (
    <Box
      sx={{
        width: '679px',
        height: '1092px',
        display: 'flex',
        flexDirection: 'row',
        gap: '32px',
        position: 'relative',
        mb:8,
      }}
    >
      <ApplePayPaymentDetails />
      <VariantLabels2 />

    </Box>
  );
};

export default ApplePayPaymentDetailsWithVariants;