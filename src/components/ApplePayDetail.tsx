import React from 'react';
import { Box, Typography } from '@mui/material';
import CardSection from './CardSection';
import cardItems from '../data/cardItemsData';
const ApplePayDetail: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" gap={2}>
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
        ApplePay-detailCard
      </Typography>

      {/* Card Box */}
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
           ml: 4,
        }}
      >
        <CardSection items={cardItems} />
        <CardSection items={cardItems} dark />
      </Box>
    </Box>
  );
};

export default ApplePayDetail;
