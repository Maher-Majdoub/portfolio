import {
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import SectionTitle from "../SectionTitle";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);
    fetch("https://formsubmit.co/d8e993d8df7ed059ae0a41b1a8f8007d", {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((response) => {
        if (response.ok) {
          if (nameRef.current) nameRef.current.value = "";
          if (emailRef.current) emailRef.current.value = "";
          if (messageRef.current) messageRef.current.value = "";

          toast.success("Message sent successfuly");
        } else toast.error("Someting went wrong while sending message");
      })
      .catch(() => {
        toast.error("Someting went wrong while sending message");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <Stack
        color="primary.main"
        spacing={5}
        padding="20px 0"
        flex={1}
        minHeight={0}
        overflow="auto"
      >
        <SectionTitle title="Contact" description="Here you can contact me" />
        <form ref={formRef} onSubmit={handleSubmit}>
          <Stack spacing={2} color="primary.main">
            <Typography variant="h5" textAlign="center" color="secondary">
              How can I help you today?
            </Typography>
            <TextField
              ref={nameRef}
              label="Name"
              variant="outlined"
              name="name"
              required
            />
            <TextField
              ref={emailRef}
              label="Email"
              type="email"
              name="email"
              required
            />
            <TextField
              ref={messageRef}
              label="Mesage"
              multiline
              rows={5}
              name="message"
              required
            />
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              size="large"
            >
              {isSubmitting ? <CircularProgress size={27} /> : "Send Message"}
            </Button>
          </Stack>
        </form>
      </Stack>
    </>
  );
};

export default ContactPage;
