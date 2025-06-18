import React from 'react';
import { Box } from '@mui/material';
import VariantLabels3  from './VariantLabels3';
import ApplePaySummarySheet from './ApplePaySummarySheet';

const ApplePaySummarySheetWithVarients: React.FC = () => {
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
      <ApplePaySummarySheet />
      <VariantLabels3 />

    </Box>
  );
};

export default ApplePaySummarySheetWithVarients;