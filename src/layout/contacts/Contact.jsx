import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { AlertMessage } from "@/components/AlertMessage";

const HCaptcha = dynamic(() => import("@hcaptcha/react-hcaptcha"), {
  ssr: false,
});

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    open: false,
    type: "success",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const captchaRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleVerify = (token) => {
    setCaptchaToken(token);
  };

  const handleExpire = () => {
    setCaptchaToken(null);
  };

  const handleSubmit = async () => {
    if (!captchaToken) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          captchaToken,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setAlert({
          open: true,
          type: "success",
          message: "Message sent successfully!",
        });

        setForm({ name: "", email: "", message: "" });
        captchaRef.current.resetCaptcha();
        setCaptchaToken(null);
      } else {
        setAlert({
          open: true,
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setAlert({
        open: true,
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }

    setLoading(false);
  };

  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ mb: 4, textAlign: "center", color: "text.primary" }}
      >
        Contact Me
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          backgroundColor: "background.paper",
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ mb: 0.5, color: "text.secondary" }}>
            Name
          </Typography>
          <TextField
            fullWidth
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
          />
        </Box>

        <Box>
          <Typography variant="h6" sx={{ mb: 0.5, color: "text.secondary" }}>
            Email
          </Typography>
          <TextField
            fullWidth
            name="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={handleChange}
          />
        </Box>

        <Box>
          <Typography variant="h6" sx={{ mb: 0.5, color: "text.secondary" }}>
            Message
          </Typography>
          <TextField
            fullWidth
            name="message"
            placeholder="What can I do for you?"
            multiline
            minRows={4}
            value={form.message}
            onChange={handleChange}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <HCaptcha
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
            onVerify={handleVerify}
            onExpire={handleExpire}
            ref={captchaRef}
          />
        </Box>

        <Button
          variant="contained"
          size="large"
          disabled={!captchaToken || loading}
          onClick={handleSubmit}
          alt="Button to submit and send email"
          aria-label="Send email"
          sx={{
            mt: 1,
            py: 1.25,
            fontWeight: 600,
            borderRadius: 2,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </Paper>

      <AlertMessage
        open={alert.open}
        type={alert.type}
        message={alert.message}
        onClose={() => setAlert({ ...alert, open: false })}
      />
    </Box>
  );
};