import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { AlertMessage } from "@/components/AlertMessage";
import { FormInput } from "@/components/FormInput";

const HCaptcha = dynamic(() => import("@hcaptcha/react-hcaptcha"), {
  ssr: false,
});

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (name, value) => {
    if (name === "name" && !value.trim()) return "Name is required";
    if (name === "email" && !emailRegex.test(value)) return "Enter a valid email address";
    if (name === "message" && !value.trim()) return "Message is required";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
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
        setErrors({ name: "", email: "", message: "" });
        captchaRef.current.resetCaptcha();
        setCaptchaToken(null);
      } else {
        setAlert({
          open: true,
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch {
      setAlert({
        open: true,
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }

    setLoading(false);
  };

  const isFormValid =
    form.name.trim() &&
    emailRegex.test(form.email) &&
    form.message.trim() &&
    captchaToken &&
    !errors.name &&
    !errors.email &&
    !errors.message;

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
        <FormInput
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          error={errors.name}
          helperText={errors.name}
        />

        <FormInput
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          error={errors.email}
          helperText={errors.email}
        />

        <FormInput
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          multiline
          minRows={4}
          error={errors.message}
          helperText={errors.message}
        />

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
          disabled={!isFormValid || loading}
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