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

const HeaderIcon = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%', 
  border: '1px solid #EBEBEB',
  width: 32,
  height: 32,
  marginRight: 8,
}));

const Header: React.FC = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: '100%', padding: 2 }}
      >
        <Box display="flex" alignItems="center">
          <HeaderIcon>
            <PaymentIcon fontSize="small" sx={{ color: '#1C1C1E' }} />
          </HeaderIcon>
          <Typography
            sx={{
              fontFamily: 'SF Pro Display',
              fontWeight: 600,
              fontSize: '24px',
              color: '#1C1C1E',
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
          }}
        >
          Human Interface Guidelines: Apple Pay
        </Link>
      </Stack>
      <Divider sx={{ my: 2 }} />
    </>
  );
};

export default Header;


