
import React from 'react';
import {
  Stack,
  Box,
  Typography,
  Link,
  Divider,
} from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import { styled } from '@mui/material/styles';

// Styled component for the icon container
const HeaderIcon = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '40px',
  border: '1px solid #EBEBEB',
  width: 56,
  height: 56,
  marginRight: 20,
}));

const Header: React.FC = () => {
  return (
    <>
      {/* Header section with icon, title, and external link */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: '1500px'
          , m: 4,

        }}
      >
        <Box display="flex" alignItems="center">
          <HeaderIcon>
            <PaymentIcon fontSize="medium" sx={{ color: '#1C1C1E' }} />
          </HeaderIcon>
          <Typography
            sx={{
              fontFamily: 'SF Pro Display',
              fontWeight: 900,
              fontSize: '40px',
              lineHeight: '100%',
              letterSpacing: '0%',
              verticalAlign: 'middle',
              color: '#000000',
              fontVariantNumeric: 'slashed-zero',
            }}
          >
            Apple Pay
          </Typography>
        </Box>
        <Link
          href="https://developer.apple.com/design/human-interface-guidelines/apple-pay/overview/"
          target="_blank"
          rel="noopener"
          underline="always"
          sx={{
            fontFamily: 'SF Mono',
            color: '#1C1C1E',
            fontSize: '14px',
            fontWeight: 400,
            width:'430px',
            height:'24px',
          }}
        >
          Human Interface Guidelines: Apple Pay
        </Link>
      </Stack>
      <Divider sx={{ m: 4,width:'1500px' }} />
    </>
  );
};

export default Header;


