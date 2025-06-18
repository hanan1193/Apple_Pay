import React from 'react';
import { Box } from '@mui/material';
import ApplePayWithVariants from './ApplePayWithVariants';
import ApplePayPaymentDetailsWithVariants from './ApplePayPaymentDetailsWithVariants';
import ApplePaySummarySheetWithVarients from './ApplePaySummarySheetWithVarients';

const AttomsSecreen: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '1930px',
        height: '1120px',
        gap: '64px',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        p: 4,
      }}
    >
      <ApplePayWithVariants />
      <ApplePayPaymentDetailsWithVariants />
      <ApplePaySummarySheetWithVarients />
    </Box>
  );
};

export default AttomsSecreen;
