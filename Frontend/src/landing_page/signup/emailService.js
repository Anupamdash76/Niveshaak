import emailjs from "emailjs-com";

const SERVICE_ID = "service_6t3myzm";
const TEMPLATE_ID_OTP = "template_jqej22r";          // OTP template
const TEMPLATE_ID_WELCOME = "template_irahv94"; // Welcome template
const PUBLIC_KEY = "d2rr1yASCUYK9ZMkm";

// ✅ Send OTP email
export const sendOtpEmail = (email, otp) => {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID_OTP,
    {
      otp: otp,          
      email: email    
    },
    PUBLIC_KEY
  );
};


export const sendWelcomeEmail = (email) => {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID_WELCOME,
    {
      email: email    // matches {{to_email}} in Welcome template
    },
    PUBLIC_KEY
  );
};
