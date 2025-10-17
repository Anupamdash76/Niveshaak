import React, { useState } from "react";
import { sendOtpEmail, sendWelcomeEmail } from "./landing_page/signup/emailService";

export default function EmailTester() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOtp = async () => {
    try {
      const generatedOtp = Math.floor(100000 + Math.random() * 900000); // random 6-digit OTP
      setOtp(generatedOtp);
      await sendOtpEmail(email, generatedOtp);
      alert(`OTP sent to ${email}: ${generatedOtp}`);
    } catch (error) {
      console.error("Error sending OTP email:", error);
      alert("Failed to send OTP. Check console.");
    }
  };

  const handleSendWelcome = async () => {
    try {
      await sendWelcomeEmail(email);
      alert(`Welcome email sent to ${email}`);
    } catch (error) {
      console.error("Error sending Welcome email:", error);
      alert("Failed to send Welcome email. Check console.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>EmailJS Testing</h2>
      <input
        type="email"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <button onClick={handleSendOtp} style={{ marginRight: "10px" }}>
        Send OTP Email
      </button>
      <button onClick={handleSendWelcome}>
        Send Welcome Email
      </button>
    </div>
  );
}
