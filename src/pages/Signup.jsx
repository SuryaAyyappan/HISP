import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "../../firebaseConfig";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    country: "India",
    password: "",
    aadhar: "",
    isPublic: false,
  });

  const [showPassword, setShowpassword] = useState(true);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  
  const collectionRef = collection(db, "users");

  const statesInIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  
  const stateCodeMap = {
    "Andhra Pradesh": "AP",
    "Arunachal Pradesh": "AR",
    Assam: "AS",
    Bihar: "BH",
    Chhattisgarh: "CH",
    Goa: "GO",
    Gujarat: "GJ",
    Haryana: "HR",
    "Himachal Pradesh": "HP",
    Jharkhand: "JH",
    Karnataka: "KT",
    Kerala: "KL",
    "Madhya Pradesh": "MP",
    Maharashtra: "MH",
    Manipur: "MN",
    Meghalaya: "MG",
    Mizoram: "MZ",
    Nagaland: "NG",
    Odisha: "OD",
    Punjab: "PJ",
    Rajasthan: "RJ",
    Sikkim: "SK",
    "Tamil Nadu": "TN",
    Telangana: "TL",
    Tripura: "TR",
    "Uttar Pradesh": "UP",
    Uttarakhand: "UT",
    "West Bengal": "WB",
  };

  // Initialize reCAPTCHA verifier
  const generateRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {
          // reCAPTCHA solved
        },
        'expired-callback': () => {
          toast.error("reCAPTCHA expired. Please try again.");
        }
      });
    }
  };

  // Send OTP
  const requestOTP = async () => {
    if (user.phone.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      setLoading(true);
      generateRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      const formatPhoneNumber = `+91${user.phone}`; // Assuming Indian numbers
      
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
        setIsPhoneVerified(true);
        toast.success("Phone number verified successfully!");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
      setShowOTP(false);
    }
  };

  const generateUniqueId = async (country, state) => {
    const stateCode = stateCodeMap[state];
    if (!stateCode) throw new Error("Invalid state");
    const uniqueNumber = Math.floor(100 + Math.random() * 900);
    return `${country}${stateCode}${uniqueNumber}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Input validation
    if (user.name.length === 0) {
      toast.error("Please enter a valid name");
      return;
    }
    if (user.phone.length !== 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    if (!isPhoneVerified) {
      toast.error("Please verify your phone number");
      return;
    }
    if (user.password.length < 8) {
      toast.error("Please enter a longer password");
      return;
    }
    if (user.city.length === 0) {
      toast.error("Please select a city");
      return;
    }
    if (user.state.length === 0) {
      toast.error("Please select a state");
      return;
    }
    if (user.country.length === 0) {
      toast.error("Please select a country");
      return;
    }
    if (!/^\d{12}$/.test(user.aadhar)) {
      toast.error("Please enter a valid 12-digit Aadhar number");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      const currentUser = res.user;
      await sendEmailVerification(currentUser);
      toast.success("Verification email sent. Please check your inbox.");
      const uniqueId = await generateUniqueId(
        user.country.toLocaleUpperCase().substring(0, 4),
        user.state
      );
      const data = { ...user };
      data.uniqueId = uniqueId;
      delete data.password;
      const userRef = doc(collectionRef, currentUser.uid);
      await setDoc(userRef, {
        ...data,
        createdAt: new Date().toISOString(),
      });

      toast.success("Account created successfully.");
      setUser({
        name: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        country: "India",
        password: "",
        aadhar: "",
        isPublic: false,
      });
      setIsPhoneVerified(false);
      setShowOTP(false);
      setOtp("");
    } catch (err) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        toast.error("This email is already in use. Please try another one.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative text-white bg-black bg-[url('/black-texture.png')] py-16">
      <section className='md:w-2/3 px-4 mx-auto space-y-6'>
        <h1 className='text-5xl font-afacad-flux text-center'>
          Create an Account
        </h1>
        <form
          className='flex flex-col gap-4 font-afacad-flux text-xl md:w-2/3 mx-auto'
          onSubmit={handleSubmit}>
          <input
            value={user.name}
            className='p-4 rounded-md bg-inherit border border-white focus:outline-none'
            type='text'
            placeholder='Enter your Name'
            name='name'
            onChange={handleChange}
          />
          <input
            value={user.email}
            className='p-4 rounded-md bg-inherit border border-white focus:outline-none'
            type='email'
            placeholder='Enter your Email'
            name='email'
            onChange={handleChange}
          />
          <div className="space-y-4">
            <input
              value={user.phone}
              className='p-4 rounded-md bg-inherit border border-white focus:outline-none w-full'
              type='text'
              placeholder='Enter your Phone'
              name='phone'
              maxLength="10"
              onChange={handleChange}
            />
            {!isPhoneVerified && (
              <>
                <div id="recaptcha-container"></div>
                {!showOTP ? (
                  <button
                    type="button"
                    onClick={requestOTP}
                    disabled={loading || user.phone.length !== 10}
                    className="w-full p-4 rounded-md bg-inherit border border-white hover:bg-gradient-to-br hover:from-maroon hover:to-purple-700 transition-colors ease-in duration-300 disabled:opacity-50"
                  >
                    {loading ? "Sending OTP..." : "Send OTP"}
                  </button>
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
                      type="button"
                      onClick={verifyOTP}
                      disabled={loading || otp.length !== 6}
                      className="w-full p-4 rounded-md bg-inherit border border-white hover:bg-gradient-to-br hover:from-maroon hover:to-purple-700 transition-colors ease-in duration-300 disabled:opacity-50"
                    >
                      {loading ? "Verifying..." : "Verify OTP"}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
          <input
            value={user.aadhar}
            className='p-4 rounded-md bg-inherit border border-white focus:outline-none'
            type='text'
            placeholder='Enter your 12-digit Aadhar Number'
            name='aadhar'
            maxLength="12"
            pattern="\d{12}"
            onChange={handleChange}
          />
          <input
            value={user.city}
            className='p-4 rounded-md bg-inherit border border-white focus:outline-none'
            type='text'
            placeholder='Enter your City'
            name='city'
            onChange={handleChange}
          />
          <select
            value={user.state}
            className='p-4 rounded-md bg-inherit border border-white focus:outline-none'
            name='state'
            onChange={handleChange}>
            <option value='' disabled>
              Select your State
            </option>
            {statesInIndia.map((state) => (
              <option className='text-black' key={state}>
                {state}
              </option>
            ))}
          </select>
          <select
            className='p-4 rounded-md bg-inherit border border-white focus:outline-none'
            name='country'
            value={user.country}>
            <option value='' disabled>
              Select your Country
            </option>
            <option value='India' className='text-black'>
              India
            </option>
          </select>
          <div className='relative'>
            <input
              value={user.password}
              className='p-4 rounded-md bg-inherit border border-white focus:outline-none w-full'
              type={showPassword ? "password" : "text"}
              placeholder='Enter your Password'
              name='password'
              onChange={handleChange}
            />
            <div
              onClick={() => setShowpassword((showPassword) => !showPassword)}
              className='absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer'>
              {showPassword ? (
                <EyeIcon strokeWidth={1} />
              ) : (
                <EyeOffIcon strokeWidth={1} />
              )}
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <input
              checked={user.isPublic}
              className='size-5 bg-inherit rounded-md'
              type='checkbox'
              name='isPublic'
              onChange={(e) => {
                setUser({
                  ...user,
                  isPublic: e.target.checked,
                });
              }}
            />
            <h2>Do you consent to make your profile public?</h2>
          </div>
          <button
            type='submit'
            className='select-none p-4 rounded-md bg-inherit border border-white hover:bg-gradient-to-br hover:from-maroon hover:to-purple-700 transition-colors ease-in duration-300 focus:outline-none'>
            Sign Up
          </button>
        </form>
      </section>
    </div>
  );
};

export default Signup;