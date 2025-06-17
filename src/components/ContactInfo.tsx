import { Box, Stack, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import type { ContactInfoProps } from '../types';


export const ContactInfo = ({ email, phone }:ContactInfoProps) => {
  return (
    <Box bgcolor="background.paper" borderRadius={3} p={2} mb={2}>
      <Stack direction="row" spacing={2} alignItems="center">
        <PersonIcon color="action" />
        <Box>
          <Typography variant="body2" color="text.secondary">{email}</Typography>
          <Typography variant="body2" color="text.secondary">{phone}</Typography>
        </Box>
      </Stack>
    </Box>
  );
};
