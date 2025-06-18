import React from 'react';
import { Box, Typography } from '@mui/material';
import CardSection from './CardSection';
import cardItems from '../data/cardItemsData';

const ApplePaySummarySheet: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" gap={2}>
      {/* Title */}
      <Typography
        sx={{
          fontFamily: 'SF Mono',
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: '24px',
          letterSpacing: '0.38px',
          verticalAlign: 'middle',
          ml: 4,
        }}
      >
        ApplePay-summarySheet
      </Typography>

      {/* Card Container */}
      <Box
        sx={{
          border: '1px dashed #7B61FF',
          borderRadius: '16px',
          p: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          alignItems: 'center',
          width: 'fit-content',
          ml: 4,
          backgroundColor: '#FAFAFA',
        }}
      >
        {/* Light Section */}
        <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 2, width: 377 }}>
          <CardSection items={cardItems} />
        </Box>

        {/* Dark Section */}
        <Box
          sx={{
            bgcolor: '#000',
            p: 2,
            borderRadius: 2,
            width: 393,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            overflow: 'hidden',
            maxHeight: 500, // Set a maximum height to contain the dark cards
          }}
        >
          <CardSection items={cardItems} dark />
        </Box>
      </Box>
    </Box>
  );
};

export default ApplePaySummarySheet;
