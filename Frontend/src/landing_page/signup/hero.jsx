import React, { useState, useEffect } from "react";

// --- Email Service Configuration ---
// Note: We are now using window.emailjs which is expected to be globally available.
const SERVICE_ID = "service_6t3myzm";
const TEMPLATE_ID_OTP = "template_jqej22r";
const TEMPLATE_ID_WELCOME = "template_irahv94";
const PUBLIC_KEY = "d2rr1yASCUYK9ZMkm";

/**
 * Sends an OTP email using EmailJS.
 * @param {string} email - The recipient's email address.
 * @param {string} otp - The One-Time Password.
 * @returns {Promise}
 */
const sendOtpEmail = (email, otp) => {
  // Access emailjs from the window object
  if (!window.emailjs) {
      return Promise.reject(new Error("EmailJS library not loaded."));
  }
  return window.emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID_OTP,
    { otp: otp, email: email },
    PUBLIC_KEY
  );
};

/**
 * Sends a welcome email using EmailJS.
 * @param {string} email - The recipient's email address.
 * @returns {Promise}
 */
const sendWelcomeEmail = (email) => {
  // Access emailjs from the window object
  if (!window.emailjs) {
      return Promise.reject(new Error("EmailJS library not loaded."));
  }
  return window.emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID_WELCOME,
    { email: email },
    PUBLIC_KEY
  );
};


/**
 * Renders the CSS styles for the signup component.
 * This component keeps all the styling encapsulated.
 */
const SignupStyles = () => (
  <style>{`
    .signup-container {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 1rem;
      background-color: #FDFDFD;
      overflow: hidden;
      font-family: 'Inter', sans-serif;
    }
    .background-animation {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #FDFDFD;
    }
    .blob {
      position: absolute;
      border-radius: 9999px;
      filter: blur(24px);
      opacity: 0.15;
      animation: blob 7s infinite;
    }
    .blob1 {
      top: -25%;
      left: -25%;
      width: 24rem;
      height: 24rem;
      background-image: linear-gradient(to bottom right, #6366F1, #8B5CF6);
    }
    .blob2 {
      bottom: -25%;
      right: -25%;
      width: 24rem;
      height: 24rem;
      background-image: linear-gradient(to bottom right, #EC4899, #EF4444);
      animation-delay: 2s;
    }
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .form-container {
      position: relative;
      z-index: 10;
      max-width: 28rem;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(16px);
      padding: 2.5rem;
      border-radius: 1rem;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
    }
    .form-header h2 {
      margin-top: 1.5rem;
      text-align: center;
      font-size: 1.875rem;
      font-weight: 800;
      color: #1F2937;
    }
    .form-header p {
      margin-top: 0.5rem;
      text-align: center;
      font-size: 0.875rem;
      color: #4B5563;
    }
    .signup-form {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .input-group {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .form-input {
      position: relative;
      width: 100%;
      padding: 0.75rem;
      background-color: #FFFFFF;
      border: 1px solid #D1D5DB;
      color: #111827;
      border-radius: 0.375rem;
      font-size: 0.875rem;
      transition: border-color 0.2s ease-in-out;
    }
    .form-input::placeholder {
      color: #9CA3AF;
    }
    .form-input:hover {
      border-color: #9CA3AF;
    }
    .form-input:focus {
      outline: none;
      box-shadow: 0 0 0 2px #818CF8;
      border-color: #6366F1;
    }
    .submit-button {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.75rem 1rem;
      border: 1px solid transparent;
      font-size: 0.875rem;
      font-weight: 500;
      border-radius: 0.375rem;
      color: white;
      background-color: #4F46E5;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      cursor: pointer;
    }
    .submit-button:hover {
      background-color: #4338CA;
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    .submit-button:disabled {
        background-color: #A5B4FC;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
    }
    .message-box {
        padding: 1rem;
        border-radius: 0.5rem;
        margin-top: 1.5rem;
        text-align: center;
        font-weight: 500;
    }
    .message-box-success {
        background-color: #D1FAE5;
        color: #065F46;
    }
    .message-box-error {
        background-color: #FEE2E2;
        color: #991B1B;
    }
  `}</style>
);

/**
 * Renders the initial signup form for collecting user details.
 */
const SignupForm = ({ formData, setFormData, onSubmit, isLoading, isScriptReady }) => (
  <form className="signup-form" onSubmit={onSubmit}>
    <div className="input-group">
      <input
        id="full-name"
        name="name"
        type="text"
        required
        className="form-input"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="form-input"
        placeholder="Email address"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="new-password"
        required
        className="form-input"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
    </div>
    <button type="submit" className="submit-button" disabled={isLoading || !isScriptReady}>
      {isLoading ? 'Sending...' : 'Send OTP'}
    </button>
  </form>
);

/**
 * Renders the form for OTP verification.
 */
const OtpForm = ({ enteredOtp, setEnteredOtp, onSubmit, isLoading }) => (
  <form className="signup-form" onSubmit={onSubmit}>
    <div className="input-group">
      <input
        type="text"
        placeholder="Enter OTP"
        required
        className="form-input"
        value={enteredOtp}
        onChange={(e) => setEnteredOtp(e.target.value)}
      />
    </div>
    <button type="submit" className="submit-button" disabled={isLoading}>
      {isLoading ? 'Verifying...' : 'Verify OTP'}
    </button>
  </form>
);

/**
 * Renders a success message upon completion.
 */
const SuccessMessage = () => (
    <div className="message-box message-box-success">
        <h3 style={{ margin: 0 }}>🎉 Signup Completed!</h3>
        <p style={{ margin: '0.5rem 0 0' }}>Welcome aboard! Check your email for a welcome message.</p>
    </div>
);

/**
 * Renders a message box for notifications (e.g., success, error).
 */
const MessageBox = ({ message, type }) => (
    <div className={`message-box message-box-${type}`}>
        {message}
    </div>
);


/**
 * Main Signup component that manages state and renders different steps.
 */
const Signup = () => {
  // State management for multi-step form
  const [step, setStep] = useState("form"); // "form" | "otp" | "done"
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null); // {text: string, type: 'success' | 'error'}
  const [isEmailJsReady, setIsEmailJsReady] = useState(false);

  // Effect hook to load the EmailJS script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.async = true;
    script.onload = () => setIsEmailJsReady(true);
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  /**
   * Handles the submission of the initial signup form.
   * Generates an OTP and sends it to the user's email.
   */
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    try {
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setOtp(generatedOtp);
      await sendOtpEmail(formData.email, generatedOtp);
      setMessage({ text: "OTP sent to your email!", type: "success" });
      setStep("otp");
    } catch (err) {
      console.error(err);
      setMessage({ text: "Failed to send OTP. Please try again.", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handles the OTP verification and sends a welcome email upon success.
   */
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setMessage(null);
    if (enteredOtp === otp) {
      setIsLoading(true);
      try {
        // On successful OTP verification, send the welcome email.
        await sendWelcomeEmail(formData.email);
        setStep("done");
      } catch (err) {
        console.error("Failed to send welcome email:", err);
        // Let the user know signup was successful even if the welcome email failed.
        setMessage({ text: "Signup successful, but the welcome email could not be sent.", type: "error" });
        setStep("done");
      } finally {
        setIsLoading(false);
      }
    } else {
      setMessage({ text: "❌ Invalid OTP. Please check and try again.", type: "error" });
    }
  };

  // Renders the correct component based on the current step
  const renderStep = () => {
    switch (step) {
      case "form":
        return <SignupForm formData={formData} setFormData={setFormData} onSubmit={handleSendOtp} isLoading={isLoading} isScriptReady={isEmailJsReady}/>;
      case "otp":
        return <OtpForm enteredOtp={enteredOtp} setEnteredOtp={setEnteredOtp} onSubmit={handleVerifyOtp} isLoading={isLoading} />;
      case "done":
        return <SuccessMessage />;
      default:
        return null;
    }
  };

  return (
    <>
      <SignupStyles />
      <div className="signup-container">
        <div className="background-animation">
          <div className="blob blob1"></div>
          <div className="blob blob2"></div>
        </div>
        <div className="form-container">
          <div className="form-header">
            <h2>Create your account</h2>
            <p>Start your journey with us today.</p>
          </div>
          {message && <MessageBox message={message.text} type={message.type} />}
          {renderStep()}
        </div>
      </div>
    </>
  );
};

export default Signup;
