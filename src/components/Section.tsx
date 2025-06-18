import { Stack, Box, Typography, Divider } from "@mui/material";
import type { SectionTitleProps } from "../types";

const Section: React.FC<SectionTitleProps> = ({ name }) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mt: 5,
            ml:4,

          }}
        >
          <Typography variant="h5" fontWeight={700}
            sx={{
               fontFamily: 'SF Pro Display',
               fontWeight: 700,
               fontSize: '24px',
               color: '#000000',
             }}
          >
            {name}
          </Typography>
        </Box>
      </Stack>
      <Divider sx={{ m: 4 ,width:'1500px'}} />
    </>
  );
};
export default Section;