import React from 'react';
import type { PaymentCardProps } from '../types';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
} from '@mui/material';

const PaymentCard: React.FC<PaymentCardProps> = ({ mode, method, imageSrc }) => {
  return (
    <Card
      sx={{
        bgcolor: mode === 'light' ? '#FAFAFAED' : '#1e1e1e',
        color: mode === 'light' ? '#000' : '#fff',
        mb: 3,
        borderRadius: 2,
        width: '350px',
      }}
    >
      <CardContent>
        <Stack spacing={2} alignItems="center">
          <Box width="100%">
            <Typography variant="subtitle2" color="text.secondary">
              Pay Stark Industries
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              $1.99
            </Typography>
          </Box>
          

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt={2}
          >
            <img
              src={imageSrc}
              alt={method}
              style={{ width: 40, height: 40, marginBottom: 8 }}
            />
            <Typography variant="body1">
              {method === 'sideButton'
                ? 'Confirm with Side Button'
                : 'Pay with TouchID'}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PaymentCard;

