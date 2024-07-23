import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import style from "../../css/LoginSignUp.css";
import hotelFront from "../../assets/images/HotelFront.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { loginApi } from "../../Services/auth";
import { Alert } from "antd";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    }
    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const formData = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const response = await loginApi(formData);
      const token = response.token;
      const user = response.user;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      console.log("tokensss", token);
      console.log("user12233", user);
      toast.success("Login successful");
      setIsLoggedIn(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Sign in failed:", error);
      setErrors({
        message: "Login failed. Please check your credentials and try again.",
      });
    }
  };

  const handleGoogleSuccess = (response) => {
    const token = response.credential;
    const userData = jwtDecode(token);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setSuccessMessage("Logged in with Google successfully");
    setIsLoggedIn(true);
    navigate("/");
  };

  const handleGoogleFailure = (error) => {
    console.error("Google login failed", error);
    setErrors({ message: "Google login failed" });
  };

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <body className="signUpIn-body">
      <ToastContainer />
      <div className="signUpIn-container">
        <div className="signUpIn-fullRow">
          <div className="signUpIn-Logpicture">
            <img src={hotelFront} alt="LoginIn" />
          </div>
          <div className="signUpIn-header">
            <div className="signUpIn-text">Login</div>
            <p className="signUpIn-Subtext">
              Join Bridge Park Hotel and share your experience to help us
              improve and provide the best services.
            </p>
            <div className="signUpIn-inputs">
              <div className="signUpIn-input">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="signUpIn-input">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {errors.email && (
                  <span className="signUpIn-error">{errors.email}</span>
                )}
              </div>
              <div className="signUpIn-input">
                <div className="signUpIn-passwordWrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <span
                    className="signUpIn-togglePassword"
                    onClick={handleToggle}
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEye : faEyeSlash}
                      size="xs"
                      style={{ color: "#669399" }}
                    />
                  </span>
                </div>
                {errors.password && (
                  <span className="signUpIn-error">{errors.password}</span>
                )}
              </div>
              <div>
                <div className="signUpIn-forgotPassword">
                  <Link to="/reset-password">Forgot Password?</Link>
                </div>
                {successMessage && (
                  <Alert message={successMessage} type="success" showIcon />
                )}
                {errors.message && (
                  <Alert message={errors.message} type="error" showIcon />
                )}
              </div>
              <div className="signUpIn-SubmitContainor">
                <div className="signUpIn-submit" onClick={handleSubmit}>
                  Login
                </div>
              </div>
              <div >
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleFailure}
                  style={{ width: '100%' }}
                />
              </div>
              <div className="signUpIn-alreadyAccount">
                Don't have an account?{" "}
                <span>
                  <Link to="/SignUp">Sign up</Link>
                </span>
              </div>
              {successMessage && (
                <div className="signUpIn-successMessage">{successMessage}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default SignIn;
