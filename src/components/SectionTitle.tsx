import { Box, Stack, Typography } from "@mui/material";

interface Props {
  title: string;
  description: string;
}

const SectionTitle = ({ title, description }: Props) => {
  return (
    <Stack alignItems="center" spacing={2}>
      <Box
        width="fit-content"
        padding={1}
        sx={{
          position: "relative",
          ":after": {
            content: "''",
            width: "70px",
            height: "5px",
            borderRadius: "10px",
            bgcolor: "secondary.main",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          },
        }}
      >
        <Typography variant="h3" color="primary.main">
          {title}
        </Typography>
      </Box>
      <Typography variant="h6" fontWeight={350} textAlign="center">
        {description}
      </Typography>
    </Stack>
  );
};

export default SectionTitle;
