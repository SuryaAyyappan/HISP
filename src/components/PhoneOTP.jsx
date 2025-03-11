import React, { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { toast } from "react-toastify";

const PhoneOTP = ({ onVerificationSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  // Initialize reCAPTCHA verifier
  const generateRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {
          // reCAPTCHA solved
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          toast.error("reCAPTCHA expired. Please try again.");
        }
      });
    }
  };

  // Send OTP
  const requestOTP = async () => {
    if (phoneNumber.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      setLoading(true);
      generateRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      const formatPhoneNumber = `+91${phoneNumber}`; // Assuming Indian numbers
      
      const confirmation = await signInWithPhoneNumber(auth, formatPhoneNumber, appVerifier);
      setConfirmationResult(confirmation);
      setShowOTP(true);
      toast.success("OTP sent successfully!");
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const verifyOTP = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    try {
      setLoading(true);
      const result = await confirmationResult.confirm(otp);
      if (result.user) {
        toast.success("Phone number verified successfully!");
        onVerificationSuccess(phoneNumber);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div id="recaptcha-container"></div>

      {!showOTP ? (
        <div className="space-y-4">
          <input
            type="text"
            maxLength="10"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
            placeholder="Enter phone number"
            className="p-4 rounded-md bg-inherit border border-white focus:outline-none w-full"
          />
          <button
            onClick={requestOTP}
            disabled={loading || phoneNumber.length !== 10}
            className="w-full p-4 rounded-md bg-inherit border border-white hover:bg-gradient-to-br hover:from-maroon hover:to-purple-700 transition-colors ease-in duration-300 disabled:opacity-50"
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <input
            type="text"
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
            placeholder="Enter 6-digit OTP"
            className="p-4 rounded-md bg-inherit border border-white focus:outline-none w-full"
          />
          <button
            onClick={verifyOTP}
            disabled={loading || otp.length !== 6}
            className="w-full p-4 rounded-md bg-inherit border border-white hover:bg-gradient-to-br hover:from-maroon hover:to-purple-700 transition-colors ease-in duration-300 disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </div>
      )}
    </div>
  );
};

export default PhoneOTP;