import {
  Button,
  Dialog,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { IoMdClose } from "react-icons/io";

interface Props {
  showDialog: boolean;
  onColseDialog(): void;
}

const DownloadResumeDialog = ({ showDialog, onColseDialog }: Props) => {
  return (
    <Dialog open={showDialog} onClose={onColseDialog}>
      <Stack alignItems="end">
        <IconButton
          color="primary"
          size="small"
          children={<IoMdClose />}
          onClick={onColseDialog}
        />
      </Stack>
      <Stack padding="0px 30px 20px" spacing={2}>
        <Typography color="primary">
          Please choose your preferred CV version:
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            fullWidth
            onClick={onColseDialog}
            variant="outlined"
            color="primary"
          >
            <Link
              href={"resume/Maher_Majdoub_en.pdf"}
              download
              sx={{ textDecoration: "none" }}
            >
              English
            </Link>
          </Button>
          <Button
            fullWidth
            onClick={onColseDialog}
            variant="outlined"
            color="primary"
          >
            <Link
              href={"resume/Maher_Majdoub_fr.pdf"}
              download
              sx={{ textDecoration: "none" }}
            >
              French
            </Link>
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default DownloadResumeDialog;
