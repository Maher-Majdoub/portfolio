import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useWindowType } from "../../Providers/WindowTypeProvider";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import DownloadResumeDialog from "../DownloadResumeDialog";
import SocialLinks from "../SocialLinks";
import MyAvatar from "../MyAvatar";

const HomePage = () => {
  const [showResumeDialog, setShowResumeDialog] = useState(false);

  const { isTablet } = useWindowType();

  return (
    <Stack
      flex={1}
      direction={isTablet ? "column-reverse" : "row"}
      alignItems="center"
      justifyContent={isTablet ? "center" : "space-around"}
    >
      <Stack spacing={4} flex={isTablet ? 0 : 1}>
        <Stack color={"primary.main"} bgcolor="transparent" spacing={1}>
          <Typography letterSpacing={2}>Hi There!</Typography>
          <Stack direction="row" spacing={0.6} alignItems="baseline">
            <Typography variant="h4" fontWeight={400} letterSpacing={2}>
              I Am
            </Typography>
            <Typography
              color="secondary"
              variant="h3"
              fontWeight={700}
              letterSpacing={2}
            >
              Maher Majdoub
            </Typography>
          </Stack>
          <Typography
            variant="h5"
            fontWeight={500}
            minHeight={32}
            letterSpacing={2}
          >
            <Typewriter
              words={[
                "Computer Science Student",
                "Competetive Programmer",
                "Web Developer",
              ]}
              loop
            />
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            fullWidth={false}
            variant="contained"
            color="secondary"
            onClick={() => setShowResumeDialog(true)}
          >
            Resume
          </Button>
          <DownloadResumeDialog
            showDialog={showResumeDialog}
            onColseDialog={() => setShowResumeDialog(false)}
          />
          <Button fullWidth={false} variant="outlined" color="secondary">
            <Link
              color="inherit"
              href="mailto:maher.majjdoub@gmail.com"
              sx={{ textDecoration: "none" }}
            >
              Contact Me
            </Link>
          </Button>
        </Stack>
        <SocialLinks />
      </Stack>
      <Box flex={isTablet ? 0 : 1} paddingBottom={isTablet ? 5 : 0}>
        <MyAvatar />
      </Box>
    </Stack>
  );
};

export default HomePage;
