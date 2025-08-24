import { useState, useRef } from "react";
import allinLogoStark from "../assets/allin-logo-stark.svg";
import { checkValidateData } from "../utils/validate";
import { setTokenCookie } from "../utils/cookieUpdate";
import { registerUser, loginUser, fetchProfileData } from "../utils/httpCalls";
import { useModalStore } from "../store/useModalStore";
const Login = ({ onClose }) => {
  const [isSignIn, setIsSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const showLoading = useModalStore((state) => state.setProfileDataLoading);
  const setProfiledata = useModalStore((state) => state.setProfileData);
  //   const registerUser = useModalStore((state) => state.registerUser);
  //   const loginUser = useModalStore((state) => state.loginUser);
  //   const profileResponse = useModalStore((state) => state.profileResponse);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForn = () => {
    setIsSignedIn(!isSignIn);
  };
  const handleSubmit = async () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value,
      name?.current?.value,
      isSignIn
    );
    if (message) {
      setErrorMessage(message);
    } else {
      let result;
      setErrorMessage(null);
      if (!isSignIn) {
        let options = {
          emailId: email?.current?.value,
          password: password.current.value,
          username: name?.current?.value,
        };
        console.log(options);
        result = await registerUser(options);
        console.log(result);
      } else {
        console.log("password", password.current.value);
        console.log("password", email?.current?.value);
        let options = {
          emailId: email?.current?.value,
          password: password.current.value,
        };
        console.log(options);
        result = await loginUser(options);
        console.log(result);
      }
      if (result && result.ok && result.data) {
        // Store token in cookie (expires in 7 days, secure if on HTTPS)
        setTokenCookie(result.data.token); // stores token for 7 days by default
        showLoading();
        onClose();
        const profileData = await fetchProfileData({
          emailId: email?.current?.value,
        });
        console.log("profileData>>>>", profileData.data);
        setProfiledata(profileData);
        showLoading();
      } else if (result && !result.ok) {
        setErrorMessage(
          result.data?.message ||
            result.error ||
            "Login failed. Please try again."
        );
      }
    }
  };
  return (
    <div className="relative">
      {/* Close button */}

      <div
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col md:flex-row items-center justify-center w-3/4 md:w-full max-w-3xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl mt-72 md:mt-20 shadow-[0_8px_32px_0_rgba(0,60,255,0.25)] h-auto md:h-[75vh] p-2 md:p-0"
      >
        {typeof onClose === "function" && (
          <button
            className="fixed md:absolute top-4 right-6 md:top-4 md:right-4 z-[100] text-4xl text-black p-2 cursor-pointer focus:outline-none "
            onClick={onClose}
            aria-label="Close login modal"
          >
            &times;
          </button>
        )}
        <form className="flex flex-col gap-4 w-full max-w-xs p-4 md:p-8 text-[#222] border-none ">
          <div className="font-bold text-2xl text-center text-[#222] mb-2 tracking-wide">
            {isSignIn ? <h1>Sign In</h1> : <h1>Sign Up</h1>}
          </div>

          {!isSignIn && (
            <input
              ref={name}
              className="p-2 rounded bg-white/90 border border-[#e0e0e0] focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="p-2 rounded bg-white/90 border border-[#e0e0e0] focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
            type="text"
            placeholder="Email Id"
          />
          <input
            ref={password}
            className="p-2 rounded bg-white/90 border border-[#e0e0e0] focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
            type="password"
            placeholder="Password"
          />
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 rounded-lg font-semibold shadow-md hover:from-blue-700 hover:to-blue-500 transition"
            type="submit"
          >
            Submit
          </button>
          <p
            className="text-center text-sm text-blue-600 cursor-pointer hover:underline mt-2"
            onClick={toggleSignInForn}
          >
            {isSignIn
              ? "New to AllIn? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
          {errorMessage && (
            <p className="text-red-500 font-semibold mb-4">{errorMessage}</p>
          )}
        </form>
        <div className="hidden md:block h-[75%] w-px bg-gray-300 mx-6 self-center" />
        <img
          src={allinLogoStark}
          alt="AllIn Logo"
          className="hidden md:block w-3/4 h-auto object-contain max-h-[400px]"
        />
      </div>
    </div>
  );
};

export default Login;
