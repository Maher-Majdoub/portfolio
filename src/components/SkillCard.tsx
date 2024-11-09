import { Box, Typography } from "@mui/material";

interface Props {
  skill: string;
}

const SkillCard = ({ skill }: Props) => {
  return (
    <Box
      padding={1}
      border="1px solid"
      borderColor="primary.main"
      borderRadius="5px"
    >
      <Typography variant="caption" fontWeight={450} color="primary.main">
        {skill}
      </Typography>
    </Box>
  );
};

export default SkillCard;
