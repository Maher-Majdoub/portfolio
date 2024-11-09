import { Box, Stack, Typography } from "@mui/material";

const Logo = () => {
  return (
    <Box width="fit-content">
      <Stack direction="row" spacing={0.5}>
        <Typography color="primary" variant="h5" fontWeight={700}>
          {"<"}
        </Typography>
        <Typography color="secondary" variant="h5" fontWeight={700}>
          Maher
        </Typography>
        <Typography color="primary" variant="h5" fontWeight={700}>
          {" />"}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Logo;
