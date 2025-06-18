import React from 'react';
import { Box } from '@mui/material';
import VariantLabels from './VariantLabels';
import ApplePayDetail from './ApplePayDetail';

const ApplePayWithVariants: React.FC = () => {
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
      <ApplePayDetail />
      <VariantLabels />

    </Box>
  );
};

export default ApplePayWithVariants;
