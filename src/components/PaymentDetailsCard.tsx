import React from 'react';
import type { PaymentCardProps } from '../types';
import {
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

const PaymentCard: React.FC<PaymentCardProps> = ({ mode, method, imageSrc }) => {
  return (
    <Card
      sx={{
        bgcolor: mode === 'light' ? '#FAFAFAED' : '#1e1e1e',
        color: mode === 'light' ? '#000' : '#fff',
        mb: 3,
        borderRadius: 2,
        width: '375px',
        height: '189px',
        overflow: 'hidden',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}
    >
      <CardContent
        sx={{
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <Box width="100%">
          <Typography variant="subtitle2" color={mode === 'light' ? 'text.secondary' : 'grey.400'}>
            Pay Stark Industries
          </Typography>
          <Typography
            sx={{
              fontFamily: 'SF Pro Rounded',
              fontWeight: 500,
              fontSize: '28px',
              lineHeight: '100%',
              letterSpacing: '-0.08px',
            }}
          >
            $1.99
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <img
            src={imageSrc}
            alt={method}
            style={{ width: 40, height: 40, marginBottom: 8 }}
          />
          <Typography
            variant="body1"
            sx={{
              wordWrap: 'break-word',
              whiteSpace: 'normal',
              maxWidth: '100%',
              textAlign: 'center',
            }}
          >
            {method === 'sideButton'
              ? 'Confirm with Side Button'
              : 'Pay with TouchID'}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PaymentCard;

