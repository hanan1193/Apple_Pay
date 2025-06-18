import React from 'react';
import { Typography, Box, CssBaseline } from '@mui/material';
import PaymentCard from './PaymentDetailsCard';
import sideButtonImg from '../assets/sideButton.png';
import fingerprintImg from '../assets/fingerprint.png';

const ApplePayPaymentDetails: React.FC = () => {
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
        ApplePay-paymentDetails
      </Typography>

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
                height: '873px',
                 ml: 4,
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
      
    </Box>
  );
};

export default ApplePayPaymentDetails;