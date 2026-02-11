import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

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
    setStatus(null);

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
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        captchaRef.current.resetCaptcha();
        setCaptchaToken(null);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ mb: 4, textAlign: "center" }}
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
        }}
      >
        <Box>
          <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
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
          <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
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
          <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
            Message
          </Typography>
          <TextField
            fullWidth
            name="message"
            placeholder="Tell me about your project"
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
          sx={{
            mt: 1,
            py: 1.25,
            fontWeight: 600,
            borderRadius: 2,
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>

        {status === "success" && (
          <Typography color="success.main">
            Message sent successfully!
          </Typography>
        )}
        {status === "error" && (
          <Typography color="error.main">
            Something went wrong. Please try again.
          </Typography>
        )}
      </Paper>
    </Container>
  );
};